"use client";
import { decrement, increment } from "@/lib/slice";
import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter (basic)</h3>
      <div className="flex gap-3">
        <button
          className="relative p-3 bg-gray-100 rounded-full flex justi"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-bold">-</span>
        </button>
        <span className=" w-9 text-center">{count}</span>
        <button
          className="relative p-3 bg-gray-100 rounded-full flex justi"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-bold">+</span>

        </button>
      </div>
    </div>
  );
}
