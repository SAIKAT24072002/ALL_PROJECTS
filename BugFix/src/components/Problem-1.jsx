import { memo, useEffect, useState } from "react";

export function ParentComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);
  return (
    <>
      <ChildComponent />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span>{count}</span>
    </>
  );
}
const ChildComponent = memo(function ChildComponent() {
  console.log("Rendering...");
  return <div>Child Component</div>;
});
