import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.models';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts-selectors';
import { addPost } from '../state/posts.actions';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators?.required, Validators.minLength(6)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)])
  })
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select(getPosts).subscribe(posts => {
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

  onAddPost(): void {
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(addPost({ post }))
    this.postForm.reset()
    this.router.navigate(['posts'])
  }

}
