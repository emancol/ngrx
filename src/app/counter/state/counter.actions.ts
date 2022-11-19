
import { createAction, props } from "@ngrx/store"

//increment action
export const increment = createAction(
    '[Counter Buttons] increment'
);
//decremetent action
export const decrement = createAction(
    '[Counter Buttons] decrement'
);
//reset action
export const reset = createAction(
    '[Counter Buttons] reset'
);
//customIncrement action
export const customIncrement = createAction(
    '[Custom Counter Input] CustomIncrement',
    props<{ count: number }>()
)
//changeChannelName action
export const changeChannelName = createAction(
    '[Custom Counter Input] changeChannelName'
)