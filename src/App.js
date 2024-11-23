// src/App.js
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import Yachts from "./pages/Yachts"
import CruiseShips from "./pages/CruiseShips"
import CommercialVessels from "./pages/CommercialVessels"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import "./styles/styles.scss"

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
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
