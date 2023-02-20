import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
  test('counterSlice.test inc', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
  });

  test('counterSlice.test dec', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
  });

  test('counterSlice.test dec with epmty state', () => {
    expect(counterReducer(undefined, counterActions.decrement)).toEqual({ value: -1 });
  });
});
