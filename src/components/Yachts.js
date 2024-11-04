import React from "react";
import { Link } from "react-router-dom";
import "../styles/Yachts.scss";
import yachtImage from "../assets/images/yachts/felix-fuchs-zFvWwKDNAzw-unsplash.jpg";
import yachtImage2 from "../assets/images/yachts/tobias-tullius-XZOO6QHub60-unsplash.jpg";
import yachtImage3 from "../assets/images/yachts/maurits-bausenhart-xdhLFkTooXQ-unsplash.jpg";
const Yachts = () => {
  return (
    <div className="boats container mt-5">
      {/* Hero Section */}
      <div className="row">
        <div className="col-12">
          <div className="position-relative">
            <img
              src={yachtImage}
              alt="Luxury Yacht"
              className="img-fluid rounded"
            />
            <div className="hero-text position-absolute top-50 start-50 translate-middle text-white text-center bg-dark bg-opacity-75 p-4 rounded">
              <h1>Luxury Yachts</h1>
              <p className="text-white-50">
                Experience the finest yachts designed for ultimate comfort and
                style.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Yachts Section */}
      <h2 className="section-title text-center mt-5">Featured Yachts</h2>
      <div className="row">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card yacht-card">
                <img src={yachtImage2} alt="Yacht" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Yacht {index + 1}</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla fermentum erat at velit aliquam, at tempor eros
                    pretium.
                  </p>
                  <Link to="/about#contact" className="btn btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Yacht Specifications Section */}
      <h2 className="section-title text-center mt-5">Yacht Specifications</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Specification</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Length</td>
              <td>30 m</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>7 m</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>100 tons</td>
            </tr>
            <tr>
              <td>Max Speed</td>
              <td>25 knots</td>
            </tr>
            <tr>
              <td>Guests</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Image Gallery Section */}
      <h2 className="section-title text-center mt-5">Gallery</h2>
      <div className="row yacht-gallery">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <img
                src={yachtImage3}
                alt="Yacht Gallery"
                className="img-fluid rounded"
              />
            </div>
          ))}
      </div>

      {/* Call to Action Section */}
      <div className="cta-section text-center my-5 p-4 rounded">
        <h2 className="text-white-50">Ready to Own Your Dream Yacht?</h2>
        <Link to="/about#contact" className="btn btn-success">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Yachts;
