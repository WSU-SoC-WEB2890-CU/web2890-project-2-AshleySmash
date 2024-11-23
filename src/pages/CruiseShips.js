import React from "react"
import HeroSection from "../components/HeroSection"
import FeatureCard from "../components/FeatureCard"
import Gallery from "../components/Gallery"
import "../styles/Boats.scss"

import cruiseImage from "../assets/images/alonso-reyes-02n6N8oftpU-unsplash.jpg"

const cruiseInfo = [
  {
    title: "Luxury Accommodations",
    description: "Enjoy elegant rooms with stunning ocean views.",
    imageSrc: "https://images.unsplash.com/photo-1599700558118-2301902c6fe9?w=500",
  },
  {
    title: "Exquisite Dining",
    description: "Savor gourmet meals crafted by world-class chefs.",
    imageSrc: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500",
  },
  {
    title: "World-Class Entertainment",
    description: "Experience live shows, concerts, and onboard activities.",
    imageSrc: "https://images.unsplash.com/photo-1583843912750-55d00b9efa21?w=500",
  },
]

const galleryImages = [
  "https://images.unsplash.com/photo-1606256485258-ae784908699f?w=500",
  "https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?w=500",
  "https://images.unsplash.com/photo-1599700548547-10a85af5b390?w=500",
  "https://images.unsplash.com/photo-1516495312540-a148643b22d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J1aXNlfGVufDB8fDB8fHwy",
]

const CruiseShips = () => {
  return (
    <div className="boats">
      <HeroSection
        imageSrc={cruiseImage}
        title="Cruise Ships"
        description="Experience the luxury of cruising on the open seas."
      />

      <div className="boats-body">
        <h2 className="section-title mt-5">Features of Our Cruise Ships</h2>
        <div className="row mx-md-3">
          {cruiseInfo.map((cruise, index) => (
            <FeatureCard key={index} title={cruise.title} description={cruise.description} imageSrc={cruise.imageSrc} />
          ))}
        </div>

        <h2 className="section-title mt-5">Gallery</h2>

        <Gallery images={galleryImages} />
      </div>
      <div className="cta-section text-center my-5">
        <h2>Set Sail on Your Next Adventure</h2>
        <a href="/contact-us" className="btn btn-highlight btn-lg fs-4 px-5 py-4">
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default CruiseShips
