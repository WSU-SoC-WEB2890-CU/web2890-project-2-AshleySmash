// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Yachts from "./components/Yachts";
import CruiseShips from "./components/CruiseShips";
import CommercialVessels from "./components/CommercialVessels";
import About from "./components/About";
import "./styles/styles.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/yachts" element={<Yachts />} />
        <Route path="/cruise-ships" element={<CruiseShips />} />
        <Route path="/commercial-vessels" element={<CommercialVessels />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
