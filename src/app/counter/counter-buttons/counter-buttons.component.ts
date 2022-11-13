import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})

export class CounterButtonsComponent implements OnInit {

  constructor(private store: Store<{ counter: { counter: number } }>) { }

  ngOnInit(): void { }

  onIncrement(): void {
    this.store.dispatch(increment())
  }

  onDecrement(): void {
    this.store.dispatch(decrement())
  }

  onReset(): void {
    this.store.dispatch(reset())
  }
}
