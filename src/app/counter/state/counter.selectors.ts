
import { createFeatureSelector, createSelector } from "@ngrx/store"
import { CounterState } from "./counter.state."

const getCounterState = createFeatureSelector<CounterState>('counter') // we are passing the name of the store that is in appModule

export const getCounter = createSelector(getCounterState, state => {
    return state.counter;
});

export const getChannelName = createSelector(getCounterState, state => {
    return state.channelName;
})