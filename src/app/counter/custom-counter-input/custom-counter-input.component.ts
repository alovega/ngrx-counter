import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeChannel, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selector';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value: number
  customChannelName$: Observable<string>
  constructor(private store: Store<{counter: counterState}>) { }

  ngOnInit(): void {
    this.customChannelName$ = this.store.select(getChannelName)
  }

  onAdd(){
    this.store.dispatch(customIncrement({value: +this.value}));
  }

  onChangeChannelName(){
    this.store.dispatch(changeChannel());
  }

}
