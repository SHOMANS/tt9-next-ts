'use client';
import {
  decrement,
  increment,
  incrementByAmount,
} from '@/redux/slices/counter';
import { useAppDispatch, useAppSelector } from '@/redux/store';

const CounterPage = () => {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>CounterPage</h1>
      <p>Count: {value}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default CounterPage;
