import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('userSlice.test', () => {
  test('userSlice.test inc', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
  });

  test('userSlice.test dec', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
  });

  test('userSlice.test dec with epmty state', () => {
    expect(counterReducer(undefined, counterActions.decrement)).toEqual({ value: -1 });
  });
});
