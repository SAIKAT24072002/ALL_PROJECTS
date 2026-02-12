import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const decrementCountHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const incrementCountHandler = () => {
    setCount(count + 1);
  }
  const resetCounterHandler = () => {
    setCount(0)
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Count Value: {count}</h2>
      <div className="countDiv">
        <button className="btn" onClick={incrementCountHandler}>Increment</button>
        <button className="btn" onClick={decrementCountHandler}>Decrement</button>
        <button className="btn" onClick={resetCounterHandler}>Reset</button>
      </div>
    </>
  )
}

export default App
