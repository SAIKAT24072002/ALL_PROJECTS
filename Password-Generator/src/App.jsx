import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeChar, setIncludeChar] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let strVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    //if number is included in the password
    if (includeNumber) strVal += "0123456789";

    //if specialChar is included in the password
    if (includeChar) strVal += "@£$%^&*(){}[]";

    //FOR Loop to generate password
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * strVal.length + 1);
      pass += strVal.charAt(char);
    }
    setPassword(pass);
  }, [length, includeNumber, includeChar, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, includeNumber, generatePassword, includeChar, setPassword]);

  return (
    <div className="w-full h-36 max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          value={password}
          readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            className="cursor-pointer"
            min={8}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            value={includeNumber}
            onChange={() => {
              setIncludeNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characterInput"
            value={includeChar}
            onChange={() => {
              setIncludeChar((prevValue) => !prevValue);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
