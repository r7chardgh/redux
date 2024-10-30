"use client";
import { decrement, increment, incrementAsync, incrementByAmount } from "@/lib/slice";
import { RootState } from "@/lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";
export default function Counter() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0
  return (
    <div>
      <h3>Counter (basic)</h3>
      <div className="flex gap-3">
        <button
          className="relative p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-bold">-</span>
        </button>
        <span className=" w-9 text-center">{count}</span>
        <button
          className="relative p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-bold">+</span>

        </button>
      </div>
      <div className="flex flex-col">
        <input className=" text-black p-1 w-auto" aria-label="Set increment amount" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>increment by amount</button>
        <button onClick={() => dispatch(incrementAsync(incrementValue))}>increment async</button>
      </div>
    </div>
  );
}
