import React from "react"
import "../styles/About.scss"

import yachtImage from "../assets/images/felix-fuchs-zFvWwKDNAzw-unsplash.jpg"
import locationImage from "../assets/images/norbert-braun-oMpz5DU19DU-unsplash.jpg"

const About = () => {
  return (
    <div>
      <div className="about container my-5">
        <div className=" why-choose-section p-5 pt-2 mt-5 shadow">
          <h1 className="text-center pt-4">Why Choose HMC?</h1>
          <p className="text-center">
            Owners want the same service, if not better, that they can access on demand, and a handful of specialist
            firms are doing their best to meet consumer-driven demand on board.
          </p>

          <div className="mx-5">
            <h3 className="mt-4 text-start">History</h3>
            <p className="text-start">
              HMC builds powerful and luxury open day boats. Our yachts are renowned for their contemporary elegance,
              breathtaking performance, and industry-leading innovations. We build every Wajer completely by hand and
              entirely in-house. All Wajer owners can rely on outstanding service that goes above and beyond the call of
              duty.
            </p>

            <h3 className="mt-4 text-start">Services</h3>
            <p className="text-start mb-5">
              HMC is a technology integrator specializing in the marine market. We design, engineer, fabricate, install,
              program, and maintain network, communication, security, and entertainment systems for cruise ships and
              superyachts as well as other types of specialty and commercial vessels.
            </p>
          </div>

          <div className="row bg-secondary p-5 rounded align-items-center text-start mb-5">
            <div className="col-md-6 text-center text-md-start">
              <img src={yachtImage} alt="Luxury Yacht" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h2 className="section-title">About HMC</h2>
              <p className="lead">
                HMC is a technology integrator specializing in the marine market. We design, engineer, fabricate,
                install, program, and maintain network, communication, security, and entertainment systems for cruise
                ships and superyachts as well as other types of specialty and commercial vessels. Our mission is to
                provide the best services to our clients, ensuring that their vessels are equipped with state-of-the-art
                technology and unparalleled service.
              </p>
            </div>
          </div>

          {/* Our Location Section */}
          <div className="row bg-secondary p-4 rounded align-items-center text-start mb-5">
            <div className="col-md-6 order-md-2 text-center text-md-start">
              <img src={locationImage} alt="Location" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h2 className="section-title">Our Location</h2>
              <p className="lead">
                With multiple locations across Germany, HMC ensures that we are always within reach to serve our
                clients.
              </p>
              <ul className="list-unstyled">
                <li>Bremen, Bismarckstrabe, 28203</li>
                <li>Hamburg, Kirchenallee 46, 20099</li>
                <li>Oldenburg, Stedinger Street L866 27, 26135</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section text-center my-5 ">
        <h2>Want to Learn more?</h2>
        <a href="/contact-us" className="btn btn-highlight btn-lg text fs-4 px-5 py-4">
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default About
