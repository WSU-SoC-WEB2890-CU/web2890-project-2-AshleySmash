import React from "react"
import "../styles/Homepage.scss"

import yachtImage from "../assets/images/felix-fuchs-zFvWwKDNAzw-unsplash.jpg"
import commercialVesselImage from "../assets/images/nick-fewings-gEnuJC5oEyo-unsplash.jpg"

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="overlay p-5 rounded text-center">
          <h1>HMC</h1>
          <p>
            HOME & MARINE is specialized in integrating electronic systems for yachts, cruise ships, and commercial
            vessels.
          </p>
          <p className="tagline">Integrating luxury with advanced technology.</p>
          <a href="/About" className="btn btn-highlight text-decoration-none">
            LEARN MORE
          </a>
        </div>
      </div>

      <div className="services-section container mx-auto text-center mt-5">
        <h2 className="header-title">Our Services</h2>
        <div className="row d-flex align-items-stretch">
          <div className="col-md-4 mb-4 d-flex">
            <div className="service-card rounded p-4 shadow flex-fill">
              <i className="fas fa-cog fa-3x mb-3"></i>
              <h4>Design & Engineering</h4>
              <p>Custom design solutions for luxury vessels.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex">
            <div className="service-card rounded p-4 shadow flex-fill">
              <i className="fas fa-tools fa-3x mb-3"></i>
              <h4>Installation & Maintenance</h4>
              <p>Expert installation and ongoing support.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex">
            <div className="service-card rounded p-4 shadow flex-fill">
              <i className="fas fa-shield-alt fa-3x mb-3"></i>
              <h4>Security Solutions</h4>
              <p>Comprehensive security systems for safety.</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="header-title mx-auto text-center mt-5">Our Products</h2>
      <div className="image-section container mx-auto mb-4">
        <div className="row">
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <a href="/yachts" className="image-card text-center">
              <img src={yachtImage} alt="Yacht" className="rounded img-fluid" />
              <div className="overlay rounded">
                <h2 className="mb-5">YACHTS</h2>
              </div>
              <button className="btn btn-highlight mb-5 mb-md-3 mb-lg-5">LEARN MORE</button>
            </a>
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <a href="/cruise-ships" className="image-card text-center">
              <img
                src="https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3J1aXNlJTIwdmFjYXRpb25hZGFtJTIwZ29uemFsZXMlMjBBMk1rQ3FZclNVdyUyMHVuc3BsYXNofGVufDB8MHwwfHx8Mg%3D%3D"
                alt="Cruise Ship"
                className="rounded img-fluid"
              />
              <div className="overlay rounded">
                <h2 className="mb-5">CRUISE SHIPS</h2>
              </div>
              <button className="btn btn-highlight mb-5 mb-md-3 mb-lg-5">LEARN MORE</button>
            </a>
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <a href="/commercial-vessels" className="image-card text-center">
              <img src={commercialVesselImage} alt="Commercial Vessel" className="rounded img-fluid" />
              <div className="overlay rounded">
                <h2 className="mb-5">COMMERCIAL VESSELS</h2>
              </div>
              <button className="btn btn-highlight mb-5 mb-md-3 mb-lg-5">LEARN MORE</button>
            </a>
          </div>
        </div>
      </div>

      <div className="cta-section mb-5">
        <h2>Ready to Elevate Your Vessel?</h2>
        <a href="/contact-us" className="mt-3 btn btn-highlight btn-lg text-decoration-none fs-4 px-5 py-4">
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default Homepage
