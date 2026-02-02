"use client";

import { useState } from "react";

export default function Calculator() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="border border-gray-600 p-2 rounded-md bg-green-100 mr-2"
        onClick={increment}
      >
        Increment
      </button>

      <button
        className="border border-gray-600 p-2 rounded-md bg-red-100"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
}
