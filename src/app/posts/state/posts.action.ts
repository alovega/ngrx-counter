import {createAction, props} from '@ngrx/store';
import { Post } from '../models/posts.model';

export const addPost = createAction('[posts list] add post', props<{post:Post}>());

export const updatePost = createAction('[posts list] edit post', props<{post:Post}>())

export const deletePost = createAction('[posts list] delete post', props<{id: number}>())
