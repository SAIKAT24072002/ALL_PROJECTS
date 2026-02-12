import { memo, useState } from "react";

{
  /*
  Performance Issue: This component re - renders unnecessarily.Optimize it.
  JavaScript
*/
}

export default function ParentComponent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ExpensiveChild />
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
const ExpensiveChild = memo(function ExpensiveChild() {
  console.log("Re-rendering Expensive Child");
  return <div>Expensive Calculation</div>;
});
