import CountdownTimer from "./components/CountdownTimer";
import StopWatch from "./components/StopWatch";

function App() {
  return (
    <>
      <div className="flex items-center w-full h-screen bg-gray-300">
        <StopWatch />
        <CountdownTimer />
      </div>
    </>
  );
}

export default App;
