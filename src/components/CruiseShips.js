import React from "react"
import "../styles/Boats.scss"

import cruiseImage from "../assets/images/cruise/alonso-reyes-02n6N8oftpU-unsplash.jpg"
import cruiseImage2 from "../assets/images/cruise/alonso-reyes-haZNHEV2WXQ-unsplash.jpg"

const CruiseShips = () => {
  return (
    <div className="boats">
      <div className="row">
        <div className="col-12">
          <div className="position-relative hero-section">
            <img src={cruiseImage} alt="Cruise Ship" className="img-fluid" />
            <div className="overlay position-absolute text-white text-center">
              <h1>Cruise Ships</h1>
              <p>Experience the luxury of cruising on the open seas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="boats-body">
        <h2 className="section-title mt-5">Features of Our Cruise Ships</h2>
        <div className="row mx-md-3">
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <h5>Luxury Accommodations</h5>
              <p>Enjoy elegant rooms with stunning ocean views.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <h5>Exquisite Dining</h5>
              <p>Savor gourmet meals crafted by world-class chefs.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <h5>World-Class Entertainment</h5>
              <p>Experience live shows, concerts, and onboard activities.</p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <h2 className="section-title mt-5">Gallery</h2>
        <div className="gallery mx-md-3">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <img key={index} src={cruiseImage2} alt={`Cruise Ship ${index + 1}`} />
            ))}
        </div>

        {/* Call to Action Section */}
        <div className="cta-section text-center my-5">
          <h2>Set Sail on Your Next Adventure</h2>
          <a href="/about#contact" className="btn btn-highlight">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default CruiseShips
