import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Count: {count}</button>;
}
