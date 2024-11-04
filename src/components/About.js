import React from "react";
import "../styles/About.scss";

import yachtImage from "../assets/images/yachts/felix-fuchs-zFvWwKDNAzw-unsplash.jpg";
import locationImage from "../assets/images/norbert-braun-oMpz5DU19DU-unsplash.jpg";

const About = () => {
  return (
    <div className="about container my-5">
      {/* About HMC Section */}
      <div className="row bg-secondary p-5 rounded align-items-center mb-5">
        <div className="col-md-6">
          <img
            src={yachtImage}
            alt="Luxury Yacht"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h1 className="section-title">About HMC</h1>
          <p className="lead">
            HMC is a technology integrator specializing in the marine market. We
            design, engineer, fabricate, install, program, and maintain network,
            communication, security, and entertainment systems for cruise ships
            and superyachts as well as other types of specialty and commercial
            vessels. Our mission is to provide the best services to our clients,
            ensuring that their vessels are equipped with state-of-the-art
            technology and unparalleled service.
          </p>
        </div>
      </div>

      {/* Our Location Section */}
      <div className="row bg-secondary p-4 rounded align-items-center mb-5">
        <div className="col-md-6 order-md-2">
          <img
            src={locationImage}
            alt="Location"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h1 className="section-title">Our Location</h1>
          <p className="lead">
            With multiple locations across Germany, HMC ensures that we are
            always within reach to serve our clients.
          </p>
          <ul className="list-unstyled">
            <li>Bremen, Bismarckstrabe, 28203</li>
            <li>Hamburg, Kirchenallee 46, 20099</li>
            <li>Oldenburg, Stedinger Street L866 27, 26135</li>
          </ul>
        </div>
      </div>

      {/* Why Choose HMC Section */}
      <div className="why-choose-section p-5 mt-5">
        <h2 className="text-center">Why Choose HMC?</h2>
        <p className="text-center">
          Owners want the same service, if not better, that they can access on
          demand, and a handful of specialist firms are doing their best to meet
          consumer-driven demand on board.
        </p>

        <h2 className="mt-4">History</h2>
        <p>
          HMC builds powerful and luxury open day boats. Our yachts are renowned
          for their contemporary elegance, breathtaking performance, and
          industry-leading innovations. We build every Wajer completely by hand
          and entirely in-house. All Wajer owners can rely on outstanding
          service that goes above and beyond the call of duty.
        </p>

        <h2 className="mt-4">Services</h2>
        <p>
          HMC is a technology integrator specializing in the marine market. We
          design, engineer, fabricate, install, program, and maintain network,
          communication, security, and entertainment systems for cruise ships
          and superyachts as well as other types of specialty and commercial
          vessels.
        </p>

        {/* Contact Us Section */}
        <div className="contact mt-5" id="contact">
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center">
            Stay up to date for the latest news, events, and model updates.
          </p>

          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
