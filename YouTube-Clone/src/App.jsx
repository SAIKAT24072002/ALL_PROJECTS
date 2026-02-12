import { Route, Routes } from "react-router";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { useState } from "react";

function App() {
  const [sideMenu, setSideMenu] = useState(true);
  return (
    <>
      <Header setSideMenu={setSideMenu} />
      <Routes>
        <Route path="/" element={<Home sideMenu={sideMenu} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
