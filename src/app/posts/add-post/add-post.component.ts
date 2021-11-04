import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../models/posts.model';
import { addPost } from '../state/posts.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ])
    })
  }

  onAddPost(){
    const post:Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(addPost({post}));
    this.router.navigate(['posts']);
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

}
