import {createAction, props} from '@ngrx/store';
import { Post } from '../models/posts.model';

export const addPost = createAction('add post', props<{post:Post}>());
