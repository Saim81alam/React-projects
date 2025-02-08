import { useState } from "react";
import "./App.css";
import Background from "./commponent/background/Background.jsx";

function App() {
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(true);

  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
    </>
  );
}

export default App;
