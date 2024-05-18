import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  RootState,
} from '../../state/slices/global.features';

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const countState = useSelector((state: RootState) => state.global.counter);

  return (
    <div>
      <p>redux Count: {countState}</p>
      <button
        className='bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded'
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded'
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
    </div>
  );
};

export default Counter;
