import { useState } from "react";

function CountdownTimer() {
  const [countdownTimer, setCountdownTimer] = useState(0);
  const [inputValue, setInputValue] = useState();

  function handleCountdownTimer() {
    const startValue = parseInt(inputValue, 10);
    if (isNaN(startValue) || startValue <= 0) return;

    setCountdownTimer(startValue);
    setInputValue("");

    const interval = setInterval(() => {
      setCountdownTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  return (
    <>
      <div className="mainContainer">
        <h1>Countdown Timer</h1>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Enter your number"
            className="rounded-md w-[60%] p-2"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleCountdownTimer} className="btnCountdown">
            Start Countdown
          </button>
        </div>
        <p className="mt-4 font-bold text-3xl text-blue-500">{`Your Time will starts in: ${countdownTimer}`}</p>
      </div>
    </>
  );
}

export default CountdownTimer;
