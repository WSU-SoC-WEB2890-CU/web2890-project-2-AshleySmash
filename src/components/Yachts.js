import React from "react"
import "../styles/Boats.scss"
import yachtImage from "../assets/images/yachts/felix-fuchs-zFvWwKDNAzw-unsplash.jpg"
import yachtImage2 from "../assets/images/yachts/tobias-tullius-XZOO6QHub60-unsplash.jpg"
import yachtImage3 from "../assets/images/yachts/maurits-bausenhart-xdhLFkTooXQ-unsplash.jpg"

const Yachts = () => {
  return (
    <div className="boats">
      <div className="row">
        <div className="col-12">
          <div className="position-relative hero-section">
            <img src={yachtImage} alt="Luxury Yacht" className="img-fluid" />
            <div className="overlay position-absolute text-white text-center">
              <h1>Luxury Yachts</h1>
              <p>Experience the finest yachts designed for ultimate comfort and style.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Yachts Section */}
      <div className="yachts-body">
        <h2 className="section-title mt-5">Featured Yachts</h2>
        <div className="row mx-md-3">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card feature-card">
                  <img src={yachtImage2} alt="Yacht" className="rounded" />
                  <div className="card-body">
                    <h5>Yacht {index + 1}</h5>
                    <p>Designed for luxury and performance on the open seas.</p>
                    <a href="/about#contact" className="btn btn-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* Gallery Section */}
        <h2 className="section-title mt-5">Gallery</h2>
        <div className="gallery mx-md-3">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <img key={index} src={yachtImage3} alt={`Yacht ${index + 1}`} />
            ))}
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="cta-section text-center my-5 ">
        <h2>Your Dream Yacht Awaits</h2>
        <a href="/about#contact" className="btn btn-highlight">
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default Yachts
