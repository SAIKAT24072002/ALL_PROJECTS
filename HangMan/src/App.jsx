import { Route, Routes } from "react-router-dom";
import StartGame from "./pages/StartPage/StartGame";
import PlayGame from "./pages/PlayPage/PlayGame";

function App() {

  return (
    <>
      <h1 className="text-center m-4 text-xl font-bold text-red-700">Hangman Game</h1>
      <Routes>
          <Route path="/start" element={<StartGame />} />
          <Route path="/play" element={<PlayGame />} />
      </Routes>
    </>
  )
}

export default App
