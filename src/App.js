import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice';

export default function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count:{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

    </div>
  );
}
