import React, { useState } from "react";

// count state

// use State
// Returns a stateful value, and a function to update it.
// const [statefulValue, functionToUpdateIT] = useState(initailState)

// const CounterFunc = (props) => {
//   const [count, setCount] = useState(
//     props.startCounter ? props.startCounter : 0
//   );
//   return (
//     <div>
//       <h1>{props.tacoo}</h1>
//       <p>count: {count}</p>
//       <p onClick={() => setCount(count + 1)}>add</p>
//       <p onClick={() => setCount(count - 1)}>minus</p>
//     </div>
//   );
// };

const CounterFunc = ({ startCounter, tacoo }) => {
  const [count, setCount] = useState(startCounter ? startCounter : 0);

  const dec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{tacoo}</h1>
      <p>count: {count}</p>
      <p onClick={() => setCount(count + 1)}>add</p>
      <p onClick={() => setCount(count - 1)}>minus</p>
      <p onClick={dec}>minus</p>
    </div>
  );
};

export default CounterFunc;
