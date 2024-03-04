import React, { useEffect, useState } from 'react';
import "./App.css";
import Navbars from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [rotate, setRotate] = useState(true);

  useEffect(() => {
    const body = document.body;
    if (rotate) {
      body.classList.remove('static');
      body.classList.add('rotate');
    } else {
      body.classList.remove('rotate');
      body.classList.add('static');
    }
  }, [rotate]);
  
  return (
    <Router>
    <div className="App">
    <Navbars rotate={rotate} setRotate={setRotate} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
