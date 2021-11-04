import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../models/posts.model';
import { updatePost } from '../state/posts.action';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  postForm: FormGroup;
  post: Post;
  postSubscription: Subscription
  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const id = params.get('id')
      this.postSubscription = this.store.select(getPostById, {id}).subscribe((data) => {
        this.post = data;
        this.createForm();
      })
    });

  }

  onEditPost(): any{
    if (this.postForm.invalid){
      return
    }
    const description = this.postForm.value.description
    const title = this.postForm.value.title
    const post: Post = {
      id: this.post.id,
      title,
      description
    }

    this.store.dispatch(updatePost({post}));
    this.router.navigate(['posts']);

  }

  createForm(){
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6)
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10)
      ])
    })
  }

  showDescriptionErrors(): any{
    const description = this.postForm.get('description')
    if(description.touched && !description.valid){
      if(description.errors.required){
        return "Description is required"
      }
      if(description.errors.minlength){
        return "Description should contain more than 10 characters"
      }
    }
  }

  ngOnDestroy(): any {
    this.postSubscription.unsubscribe()
  }

}
