
import { createAction, props } from "@ngrx/store"

export const increment = createAction('[Counter Buttons] increment');
export const decrement = createAction('[Counter Buttons] decrement');
export const reset = createAction('[Counter Buttons] reset');

export const customIncrement = createAction('[Custom Counter Input] CustomIncrement', props<{ count: number }>())