import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  function onClickHandler() {}
  return (
    <>
      <div>
        <h2 className="text-center text-red-500 font-bold text-3xl">
          Calculator
        </h2>
        <div className="mx-auto max-w-lg border-2 border-black p-4 rounded-md">
          <input
            className="w-full p-4 bg-black text-white  rounded-md"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="grid grid-cols-4 gap-2 mt-2">
            <button
              onClick={onClickHandler}
              className="p-2 rounded-sm text-lg bg-white border border-black"
            >
              7
            </button>
            <button
              onClick={onClickHandler}
              className="p-2 rounded-sm text-lg bg-white border border-black"
            >
              8
            </button>
            <button
              onClick={onClickHandler}
              className="p-2 rounded-sm text-lg bg-white border border-black"
            >
              9
            </button>
            <button className="p-2 rounded-sm text-lg bg-white border border-black">
              ÷
            </button>
            <button
              onClick={onClickHandler}
              className="p-2 rounded-sm text-lg bg-white border border-black"
            >
              4
            </button>
            <button
              onClick={onClickHandler}
              className="p-2 rounded-sm text-lg bg-white border border-black"
            >
              5
            </button>
            <button
              onClick={onClickHandler}
              className="p-2 rounded-sm text-lg bg-white border border-black"
            >
              6
            </button>
            <button className="p-2 rounded-sm text-lg bg-white border border-black">
              x
            </button>
            <button
              onClick={onClickHandler}
              className="p-2 rounded-sm text-lg bg-white border border-black"
            >
              1
            </button>
            <button
              onClick={onClickHandler}
              className="p-2 rounded-sm text-lg bg-white border border-black"
            >
              2
            </button>
            <button
              onClick={onClickHandler}
              className="p-2 rounded-sm text-lg bg-white border border-black"
            >
              3
            </button>
            <button className="p-2 rounded-sm text-lg bg-white border border-black">
              -
            </button>
            <button
              onClick={onClickHandler}
              className="p-2 rounded-sm text-lg bg-white border border-black"
            >
              0
            </button>
            <button className="p-2 rounded-sm text-lg bg-white border border-black">
              .
            </button>
            <button className="p-2 rounded-sm text-lg bg-white border border-black">
              +
            </button>
            <button className="p-2 rounded-sm text-lg bg-white border border-black">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
