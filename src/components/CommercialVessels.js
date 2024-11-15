import React from "react"
import "../styles/Boats.scss"

import vesselImage from "../assets/images/commercial_vessels/nick-fewings-gEnuJC5oEyo-unsplash.jpg"
import vesselImage2 from "../assets/images/commercial_vessels/bernd-dittrich-kCmQTID6nQY-unsplash.jpg"

const CommercialVessels = () => {
  return (
    <div className="boats ">
      <div className="row">
        <div className="col-12">
          <div className="position-relative hero-section">
            <img src={vesselImage2} alt="Commercial Vessel" className="img-fluid rounded" />
            <div className="overlay position-absolute text-white text-center">
              <h1>Commercial Vessels</h1>
              <p>Explore our range of advanced commercial vessels.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="boats-body">
        <h2 className="section-title mt-5">Features of Our Commercial Vessels</h2>
        <div className="row mx-md-3">
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <h5>High Capacity</h5>
              <p>Engineered to transport large cargo efficiently and reliably.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <h5>Robust Design</h5>
              <p>Built to withstand harsh environments with exceptional durability.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <h5>State-of-the-Art Technology</h5>
              <p>Equipped with cutting-edge navigation and propulsion systems.</p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <h2 className="section-title mt-5">Gallery</h2>
        <div className="gallery mx-md-3">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <img key={index} src={vesselImage} alt={`Commercial Vessel ${index + 1}`} />
            ))}
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="cta-section text-center my-5">
        <h2>Ready to Elevate Your Commercial Vessel?</h2>
        <p className="text-white">Contact us to learn more about our solutions today!</p>
        <a href="/about#contact" className="btn btn-highlight">
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default CommercialVessels
