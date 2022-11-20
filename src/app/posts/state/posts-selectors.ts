import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";


export const POSTS_STATE_NAME = 'posts';

const getPostsState = createFeatureSelector<PostsState>('posts')

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts
})

export const getPosById = createSelector(getPostsState, (state: PostsState, props: { id: string | null }) => {
    return state.posts.find(post => post.id === props.id)
})