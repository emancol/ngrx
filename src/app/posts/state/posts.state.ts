import { Post } from "src/app/models/posts.models";

export interface PostsState {
    posts: Post[];
}

export const initialState: PostsState = {
    posts: [
        { id: '1', title: 'Sample Title 1', description: 'Sample Descrption 1' },
        { id: '2', title: 'Sample Title 2', description: 'Sample Descrption 2' },
    ]
}