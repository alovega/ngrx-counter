import { createReducer, on } from '@ngrx/store';
import { changeChannel, customIncrement, decrement, increment, reset } from './counter.actions';
import { initialState } from './counter.state';


// tslint:disable-next-line:variable-name
const _counterReducer = createReducer(initialState,
  on(increment,
  (state) => {
    return {
      ...state,
      counter: state.counter + 1
    };
  }),
  on(decrement,
    (state) => {
      return {
        ...state,
        counter: state.counter - 1
      };
    }),
    on(reset,
      (state) => {
        return{
          ...state,
          counter: 0
        };
      }),

    on(customIncrement, (state, action) => {
      return {
        ...state,
        counter: state.counter + action.value
      };
    }),

    on(changeChannel, (state) => {
      return {
        ...state,
        channelName: 'Kelvin Full-Stack Developer'
      };
    })
  );

// tslint:disable-next-line:typedef
export function counterReducer(state: any, action: any){
  return _counterReducer(state, action);
}
