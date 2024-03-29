import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui/deprecated/Button';
import { getCounterValue } from '../model/selectors/getConterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
  className?: string;
}

export const Counter = () => {
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
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button data-testid="counter-inc" onClick={increment}>
        +
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button data-testid="counter-dec" onClick={decrement}>
        -
      </Button>
    </div>
  );
};
