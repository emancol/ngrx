import { createReducer } from "@ngrx/store"
import { initialState } from "src/app/counter/state/counter.state."
import { Post } from "src/app/models/posts.models"

const _postsReducer = createReducer(initialState)

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action)
}