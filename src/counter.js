import React, { useState } from "react";

const Counterapp = () => {
  let [count, setCount] = useState(0);

  let increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  let decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  let reset = () => {
    if (count > 0) {
      setCount(0);
    }
  };
  return (
    <div>
      <button onClick={increment}>inc</button>
      <h1>{count}</h1>
      <button onClick={decrement}>dec</button>
      <br />
      <br />
      <button onClick={reset}>res</button>
    </div>
  );
};

export default Counterapp;
