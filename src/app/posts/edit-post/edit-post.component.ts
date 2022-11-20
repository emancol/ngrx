import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.models';
import { AppState } from 'src/app/store/app.state';
import { getPosById } from '../state/posts-selectors';
import { Observable, Subscription } from 'rxjs'
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { updatePost } from '../state/posts.actions';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  post!: Post | undefined;
  postForm!: FormGroup;
  postSubscript!: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: string | null = params.get('id')
      this.postSubscript = this.store.select(getPosById, { id }).subscribe(post => {
        this.post = post;
        this.createForm()
      })
    })
  }

  createForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post?.description, [Validators.required, Validators.minLength(10)]),
    })
  }

  showDescriptionErrors(): string | void {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm?.touched && !descriptionForm.valid) {
      if (descriptionForm.errors?.['required']) {
        return 'description is required'
      }
      if (descriptionForm.errors?.['minlength']) {
        return 'Description should be of minimum 10 characters length'
      }

    }
  }

  onSubmit(): void {
    const title: string = this.postForm.value.title;
    const description: string = this.postForm.value.description;

    const post: Post = {
      id: this.post?.id,
      title,
      description
    }

    // dispatch the action
    this.store.dispatch(updatePost({ post }))
    this.router.navigate(['posts'])
  }

  ngOnDestroy(): void {
    if (this.postSubscript) {
      this.postSubscript.unsubscribe()
    }
  }



}
