import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../models/posts.model';
import {AppState} from '../../store/app.state';
import {Store} from '@ngrx/store';
import {getPosts} from '../state/posts.selector';
import { deletePost } from '../state/posts.action';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Observable<Post[]>;
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }

  onDeletePost(id: number){
    if(confirm("Are you Sure you want to delete this post ")){
      this.store.dispatch(deletePost({id}));
    }
  }

}
