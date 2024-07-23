import React from "react";
import { useState } from "react";

function Count() {
  let [count, setCount] = useState(0);

  function incCount() {
    setCount((currVal) => {
      return currVal + 1;
    });
    setCount((currVal) => {
      return currVal + 1;
    });
    setCount((currVal)=>{
      return currVal + 5;
    })
  }

  return (
    <div>
      <h3>count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}

export default Count;
