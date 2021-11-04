import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeChannel, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selector';
import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  customChannelName$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.customChannelName$ = this.store.select(getChannelName);
  }

  onAdd(): void{
    this.store.dispatch(customIncrement({value: +this.value}));
  }

  onChangeChannelName(): void{
    this.store.dispatch(changeChannel());
  }

}
