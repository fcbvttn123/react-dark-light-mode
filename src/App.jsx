import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar"
import Main from "./components/Main"

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function modeChange() {
    setDarkMode((prev) => !prev);
  }
  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={modeChange} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
