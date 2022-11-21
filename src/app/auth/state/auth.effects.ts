
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType, EffectConfig } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { EMPTY } from 'rxjs'
import { switchMap, mergeMap, map, exhaustMap } from 'rxjs/operators'
import { AuthService } from 'src/app/services/auth.service'
import { loginStart, loginSuccess } from './auth.actions'

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService) { }
    login$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        alert('successs')
                        return loginSuccess()
                    })
                )
            })
        )
    })

}