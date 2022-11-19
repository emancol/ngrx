
import { state } from "@angular/animations";
import { Action, createReducer, on, State } from "@ngrx/store"
import { StateActionPair } from "@ngrx/store/src/state";
import { changeChannelName, customIncrement, decrement, increment, reset } from "./counter.actions";
import { CounterState, initialState } from "./counter.state."


const _counterReducer = createReducer(
    initialState,
    on(increment, state => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, state => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, state => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customIncrement, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.count
        }
    }),
    on(changeChannelName, (state) => {
        return {
            ...state,
            channelName: 'Modified Emanuele Web Developer'
        }
    })



);

export function counterReducer(state: any, action: Action) {
    return _counterReducer(state, action);
}