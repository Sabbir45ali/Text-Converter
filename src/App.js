import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
// import About from "./Components/About";
import Alert from "./Components/Alert";

// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#1c2d7d";
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="Text-Converter"
          toggleMode={toggleMode}
          aboutText="About-Us"
          mode={mode}
        />
        <Alert alert="This site is for Formating your text" />
        <div className="container">
          <Textarea heading="Enter the text to analyze" mode={mode} />
          {/* <Routes> */}
            {/* <Route
              path="/"
              element={
              }
            />
            <Route
              path="/About"
              element={<About heading="About-Us" mode={mode} />}
            />
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
