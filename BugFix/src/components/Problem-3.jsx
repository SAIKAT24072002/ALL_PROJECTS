import { memo, useState } from "react";

{
  /*
  Performance Issue: Optimize the below component to prevent unnecessary re - renders.
  JavaScript
*/
}

const ExpensiveComponent = memo(function ExpensiveComponent({ num }) {
  console.log("Rendered in Line number 11");
  return <div>Computed Value: {num * 10}</div>;
});
export default function MyApp() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ExpensiveComponent num={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
