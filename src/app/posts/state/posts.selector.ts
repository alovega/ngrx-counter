import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PostsState} from './posts.state';

const getPostState = createFeatureSelector<PostsState>('posts');
export const getPosts = createSelector(getPostState, state => {
  return state.posts;
});

export const getPostById = createSelector(getPostState, (state:any, props) => {
  return state.posts.filter((post) => post.id === +props.id)[0];
})
