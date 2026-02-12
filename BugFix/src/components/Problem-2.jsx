//Bug Fix: This counter should update every second, but it doesn’t. Fix it.

import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      console.log(`Timer Value ${timer}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  //setTimeout clear korer jonno clearTimeout

  return <h1>{count}</h1>;
}
