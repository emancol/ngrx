import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs'
import { Post } from 'src/app/models/posts.models';
import { getPosts } from '../state/posts-selectors';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts?: Observable<Post[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts)
  }

  onDeletePost(id: string): void {
    if (confirm("Are you sure you want to delete?")) {

      this.store.dispatch(deletePost({ id }))
    }
  }

}
