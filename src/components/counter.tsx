'use client';

import { useDispatch, useSelector } from 'react-redux';
import { Button } from './ui/button';
import { decrement, increment, selectCount } from '@/lib/features/counter/counter-slice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div className="flex space-x-3 items-center">
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <pre>{count}</pre>
      <Button onClick={() => dispatch(increment())}>+</Button>
    </div>
  );
}
