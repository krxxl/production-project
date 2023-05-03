import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('loginSlice.test', () => {
  test('loginSlice.test inc', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment)).toEqual({
      value: 11,
    });
  });

  test('loginSlice.test dec', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement)).toEqual({
      value: 9,
    });
  });

  test('loginSlice.test dec with epmty state', () => {
    expect(counterReducer(undefined, counterActions.decrement)).toEqual({
      value: -1,
    });
  });
});
