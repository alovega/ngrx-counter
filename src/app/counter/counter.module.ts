import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';


const routes: Routes = [
  {
    path:'',
    component: CounterComponent
}
]
@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    StoreModule.forFeature('counter', counterReducer)
  ]
})
export class CounterModule { }
