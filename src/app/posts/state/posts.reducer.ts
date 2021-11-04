import {createReducer, on} from '@ngrx/store';
import {initialState} from './posts.state';
import {addPost} from './posts.action';

// tslint:disable-next-line:variable-name
const _postReducers = createReducer(initialState,
  on(addPost, (state, action) => {
    let post = {...action.post}
    post.id = state.posts.length + 1
    return {
      ...state,
      posts: [...state.posts, post]
    };
  })
);

// tslint:disable-next-line:typedef
export function postsReducers(state: any, action: any){
  return _postReducers(state, action);
}
