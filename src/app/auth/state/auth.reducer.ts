import { initialState } from "./auth.state";
import { createReducer } from '@ngrx/store'


const _authReducer = createReducer(initialState)

export function AuthReducer(state: string, action: string): void {

}