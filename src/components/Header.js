import React, { useState, useEffect, useRef } from "react"
import { NavLink, Link } from "react-router-dom"

import logoImg from "../assets/images/logos/HMC-Clark_FINAL-RGB_HMC-RGB-DarkBG.jpg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const overlayRef = useRef(null)

  const toggleNav = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="header">
      <nav className="navbar navbar-expand-md navbar-light">
        <Link className="navbar-brand text-white p-0 ms-lg-4" to="/">
          <img src={logoImg} alt="HMC logo" className="p-0 m-0"></img>
        </Link>
        <button
          className="navbar-toggler bg-white"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end`}>
          <ul className="navbar-nav">
            <li className="nav-item px-lg-3">
              <NavLink className="nav-link" to="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li className="nav-item px-lg-3">
              <NavLink className="nav-link" to="/yachts" onClick={() => setIsOpen(false)}>
                Yachts
              </NavLink>
            </li>
            <li className="nav-item px-lg-3">
              <NavLink className="nav-link" to="/cruise-ships" onClick={() => setIsOpen(false)}>
                Cruise Ships
              </NavLink>
            </li>
            <li className="nav-item px-lg-3">
              <NavLink className="nav-link" to="/commercial-vessels" onClick={() => setIsOpen(false)}>
                Commercial Vessels
              </NavLink>
            </li>
            <li className="nav-item  ps-lg-3 pe-lg-5">
              <NavLink className="nav-link" to="/about" onClick={() => setIsOpen(false)}>
                About HMC
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay for small screens */}
      <div className={`overlay ${isOpen ? "show" : ""}`} ref={overlayRef}>
        <ul className="navbar-nav ps-3">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/yachts"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              Yachts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/cruise-ships"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              Cruise Ships
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/commercial-vessels"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              Commercial Vessels
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/about"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              About HMC
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
