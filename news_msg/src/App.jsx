import React, { useState } from "react";
import Navbar from "./commponent/Navbar";
import News_Bord from "./commponent/News_Bord";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <News_Bord category={category} />
    </>
  );
}

export default App;
