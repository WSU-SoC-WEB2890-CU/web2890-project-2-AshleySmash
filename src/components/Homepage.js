// src/components/Homepage.js
import React from "react";
import "../styles/Homepage.scss";

// Importing images
import yachtImage from "../assets/images/yachts/felix-fuchs-zFvWwKDNAzw-unsplash.jpg";
import cruiseImage from "../assets/images/cruise/adam-gonzales-A2MkCqYrSUw-unsplash.jpg";
import commercialVesselImage from "../assets/images/commercial_vessels/nick-fewings-gEnuJC5oEyo-unsplash.jpg";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="overlay p-5 rounded text-center">
          <h1>HMC</h1>
          <p className="text-white-50">
            HOME & MARINE is specialized in integrating electronic systems for
            yachts, cruise ships, and commercial vessels.
          </p>
          <p className="tagline text-white-50 ">
            Integrating luxury with advanced technology.
          </p>
          <a href="/About" className="btn btn-highlight text-decoration-none">
            LEARN MORE
          </a>
        </div>
      </div>

      <div className="services-section container mx-auto text-center mt-5">
        <h2 className="header-title">Our Services</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="service-card bg-secondary rounded p-4 text-light">
              <i className="fas fa-cog fa-3x mb-3"></i>
              <h4>Design & Engineering</h4>
              <p className="text-white-50">
                Custom design solutions for luxury vessels.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-card bg-secondary rounded p-4 text-light">
              <i className="fas fa-tools fa-3x mb-3"></i>
              <h4>Installation & Maintenance</h4>
              <p className="text-white-50">
                Expert installation and ongoing support.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-card bg-secondary rounded p-4 text-light">
              <i className="fas fa-shield-alt fa-3x mb-3"></i>
              <h4>Security Solutions</h4>
              <p className="text-white-50">
                Comprehensive security systems for safety.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="header-title mx-auto text-center mt-5">Our Products</h2>
      <div className="image-section container mx-auto mb-4">
        <a href="/yachts" className="image-card m-4">
          <img src={yachtImage} alt="Yacht" className="rounded" />
          <div className="overlay rounded">
            <h2 className="mb-5">YACHTS</h2>
          </div>
          <button className="btn btn-highlight mb-5">LEARN MORE</button>
        </a>
        <a href="/cruise-ships" className="image-card m-4">
          <img src={cruiseImage} alt="Cruise Ship" className="rounded" />
          <div className="overlay rounded">
            <h2 className="mb-5">CRUISE SHIPS</h2>
          </div>
          <button className="btn btn-highlight mb-5">LEARN MORE</button>
        </a>
        <a href="/commercial-vessels" className="image-card m-4">
          <img
            src={commercialVesselImage}
            alt="Commercial Vessel"
            className="rounded"
          />
          <div className="overlay rounded">
            <h2 className="mb-5 p-2">COMMERCIAL VESSELS</h2>
          </div>
          <button className="btn btn-highlight mb-5">LEARN MORE</button>
        </a>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section bg-secondary text-center py-5 mb-5">
        <h2>Ready to Elevate Your Vessel?</h2>
        <a
          href="/contact"
          className=" mt-3 btn btn-highlight btn-lg text-decoration-none fs-4 px-5 py-4"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Homepage;
