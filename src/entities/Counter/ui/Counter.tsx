import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getConterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
  className?: string
}

export const Counter: FC<CounterProps> = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="counter">{counterValue}</h1>
      <Button data-testid="counter-inc" onClick={increment}>+</Button>
      <Button data-testid="counter-dec" onClick={decrement}>-</Button>
    </div>
  );
};
