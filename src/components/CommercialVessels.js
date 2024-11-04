import React from "react";
import "../styles/Yachts.scss"; // Assuming you have a separate SCSS file for Commercial Vessels styling

import vesselImage from "../assets/images/commercial_vessels/nick-fewings-gEnuJC5oEyo-unsplash.jpg";
import vesselImage2 from "../assets/images/commercial_vessels/bernd-dittrich-kCmQTID6nQY-unsplash.jpg";

const CommercialVessels = () => {
  return (
    <div className="boats container mt-5">
      {/* Hero Section */}
      <div className="row">
        <div className="col-12">
          <div className="position-relative">
            <img
              src={vesselImage2}
              alt="Commercial Vessel"
              className="img-fluid rounded"
            />
            <div className="hero-text position-absolute top-50 start-50 translate-middle text-white text-center bg-dark bg-opacity-75 p-5 rounded">
              <h1>Commercial Vessels</h1>
              <p className="text-white-50">
                Explore our range of advanced commercial vessels.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <h2 className="section-title text-center mt-5">
        Features of Our Commercial Vessels
      </h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">High Capacity</h5>
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
              <h5 className="card-title">Robust Design</h5>
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
              <h5 className="card-title">State-of-the-Art Technology</h5>
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
            <div className="col-md-3 mb-3" key={index}>
              <img
                src={vesselImage}
                alt="Gallery"
                className="img-fluid rounded"
              />
            </div>
          ))}
      </div>

      {/* Call to Action Section */}
      <div className="cta-section text-center my-5 p-4 rounded">
        <h2>Ready to Elevate Your Commercial Vessel?</h2>
        <p className="text-white-50">
          Contact us to learn more about our solutions today!
        </p>
        <a href="/about#contact" className="btn btn-success">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default CommercialVessels;
