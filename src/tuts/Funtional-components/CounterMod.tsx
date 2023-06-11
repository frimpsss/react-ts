import React from "react";
type SimpleCounterProps = {
    count: number, 
    setCount: React.Dispatch<React.SetStateAction<number>>
}
const CounterMod = ({count, setCount}: SimpleCounterProps) => {

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

export default CounterMod;