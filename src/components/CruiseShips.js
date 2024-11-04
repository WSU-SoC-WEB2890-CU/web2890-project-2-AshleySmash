// src/components/CruiseShips.js
import React from "react";
import "../styles/Yachts.scss"; // Assuming you have a separate SCSS file for Cruise Ships styling

import cruiseImage from "../assets/images/cruise/alonso-reyes-02n6N8oftpU-unsplash.jpg";
import cruiseImage2 from "../assets/images/cruise/alonso-reyes-haZNHEV2WXQ-unsplash.jpg";

const CruiseShips = () => {
  return (
    <div className="boats container mt-5">
      {/* Hero Section */}
      <div className="row">
        <div className="col-12">
          <div className="position-relative">
            <img
              src={cruiseImage}
              alt="Cruise Ship"
              className="img-fluid rounded"
            />
            <div className="hero-text position-absolute top-50 start-50 translate-middle text-white text-center bg-dark bg-opacity-75 p-5 rounded">
              <h1>Cruise Ships</h1>
              <p className="text-white-50">
                Experience the luxury of cruising on the open seas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <h2 className="section-title text-center mt-5">
        Features of Our Cruise Ships
      </h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Luxury Accommodations</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquet, enim a bibendum sagittis, odio risus vestibulum nunc.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Exquisite Dining</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vel tristique nisi, ut dignissim arcu.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">World-Class Entertainment</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel nisi nec urna vehicula tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <h2 className="section-title text-center mt-5">Gallery</h2>
      <div className="row yacht-gallery">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div className="col-md-3 mb-3 " key={index}>
              <img
                src={cruiseImage2}
                alt="Gallery"
                className="img-fluid rounded"
              />
            </div>
          ))}
      </div>

      {/* Call to Action Section */}
      <div className="cta-section text-center my-5 p-4 rounded">
        <h2>Ready to Set Sail?</h2>
        <p className="text-white-50">Contact us to book your cruise today!</p>
        <a href="/about#contact" className="btn btn-success">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default CruiseShips;
