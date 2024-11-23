import React from "react"
import "../styles/Boats.scss"
import HeroSection from "../components/HeroSection"
import FeatureCard from "../components/FeatureCard"
import Gallery from "../components/Gallery"

import vesselImage from "../assets/images/nick-fewings-gEnuJC5oEyo-unsplash.jpg"
import vesselImage2 from "../assets/images/bernd-dittrich-kCmQTID6nQY-unsplash.jpg"

const vesselInfo = [
  {
    title: "High Capacity",
    description: "Engineered to transport large cargo efficiently and reliably.",
  },
  {
    title: "Robust Design",
    description: "Built to withstand harsh environments with exceptional durability.",
  },
  {
    title: "State-of-the-Art Technology",
    description: "Equipped with cutting-edge navigation and propulsion systems.a",
  },
]

const galleryImages = [
  "https://images.unsplash.com/photo-1601996507549-9d2c46e53eb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMGJvYXR8ZW58MHx8MHx8fDA%3D",
  vesselImage,
  "https://images.unsplash.com/photo-1598193957011-39b9f2916992?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tbWVyY2lhbCUyMGJvYXR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1626740069712-e4906e777e14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tbWVyY2lhbCUyMGJvYXR8ZW58MHx8MHx8fDI%3D",
]

const CommercialVessels = () => {
  return (
    <div className="boats ">
      <HeroSection
        imageSrc={vesselImage2}
        title="Commercial Vessels"
        description="Explore our range of advanced commercial vessels."
      />

      <div className="boats-body">
        <h2 className="section-title mt-5">Features of Our Commercial Vessels</h2>
        <div className="row mx-md-3">
          {vesselInfo.map((vessel, index) => (
            <FeatureCard key={index} title={vessel.title} description={vessel.description} />
          ))}
        </div>

        <h2 className="section-title mt-5">Gallery</h2>
        <Gallery images={galleryImages} />
      </div>
      <div className="cta-section text-center my-5">
        <h2>Ready to Elevate Your Commercial Vessel?</h2>
        <p className="text-white">Contact us to learn more about our solutions today!</p>
        <a href="/contact-us" className="btn btn-highlight btn-lg fs-4 px-5 py-4">
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default CommercialVessels
