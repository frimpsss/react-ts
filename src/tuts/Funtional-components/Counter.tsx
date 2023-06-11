import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(4);
  return (
    <div>
      <h1>Count is {count}</h1>
      <button
        onClick={() => {
          setCount((_) => ++_);
        }}
      >
        inc
      </button>
      <button
        onClick={() => {
          setCount((_) => --_);
        }}
      >
        dec
      </button>
    </div>
  );
};

export default Counter;
