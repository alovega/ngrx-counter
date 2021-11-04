import {CounterState} from '../counter/state/counter.state';
import {PostsState} from '../posts/state/posts.state';
import {counterReducer} from '../counter/state/counter.reducer';
import {postsReducers} from '../posts/state/posts.reducer';

export interface AppState{
  counter: CounterState;
  posts: PostsState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReducers
};
