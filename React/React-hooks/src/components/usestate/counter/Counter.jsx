/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  

  const increment = () => {
    if (count === 10) 
      {
      return;
    } 
    else 
    {
      setCount((prev) => prev + 1);
    }
  };
  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const multiply = () => {
     setCount((prev) => prev ** 2);
  };

  const divide = () => {
    setCount((prev) => prev/2);
  };

  const add10 =() => {
    setCount(0);
    if(count === true){
      // setCount(0);
    // setCount((prev) => prev+10);
    }
    else {
      setCount((prev) => prev+10);
    }
  };

  const reset =() => {
    setCount(0);
  };

  return (
    <div>
      <h1>Current Count Value is: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {/* Todo  Task*/}
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>
      <button onClick={add10}>Add 10</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
