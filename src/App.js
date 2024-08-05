// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import About from './components/about/About';
import Start from './components/start/Start';
import Calc from './components/calc/Calc';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mortgage-calculator" element={<Calc />} />
        <Route path="/start" element={<Start />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
