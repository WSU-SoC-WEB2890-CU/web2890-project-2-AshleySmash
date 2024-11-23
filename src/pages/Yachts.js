import React, { useState } from "react"
import HeroSection from "../components/HeroSection"
import FeatureCard from "../components/FeatureCard"
import Gallery from "../components/Gallery"
import "../styles/Boats.scss"

import yachtImage from "../assets/images/felix-fuchs-zFvWwKDNAzw-unsplash.jpg"

const yachts = [
  {
    title: "Yacht 1",
    description: "Experience the finest yachts designed for ultimate comfort and style.",
    imageSrc:
      "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWFjaHR8ZW58MHwxfDB8fHwy",
    model: "A-Class Luxury",
    type: "Motor Yacht",
    details:
      "This yacht offers state-of-the-art navigation systems and unparalleled comfort, perfect for long journeys.",
  },
  {
    title: "Yacht 2",
    description: "Experience the finest yachts designed for ultimate comfort and style.",
    imageSrc:
      "https://images.unsplash.com/photo-1730544218748-74f28a89215b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHlhY2h0c3xlbnwwfHwwfHx8Mg%3D%3D",
    model: "B-Class Sport",
    type: "Sailing Yacht",
    details: "Designed for speed and adventure, this yacht is perfect for thrilling experiences on the water.",
  },
  {
    title: "Yacht 3",
    description: "Experience the finest yachts designed for ultimate comfort and style.",
    imageSrc:
      "https://images.unsplash.com/photo-1727786847949-dd24e7cc6bd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eWFjaHRzfGVufDB8fDB8fHwy",
    model: "C-Class Explorer",
    type: "Expedition Yacht",
    details: "Built for exploration, this yacht is equipped to take you to the most remote and beautiful locations.",
  },
]

const galleryImages = [
  "https://images.unsplash.com/photo-1559385301-0187cb6eff46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1562281302-809108fd533c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eWFjaHR8ZW58MHx8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHlhY2h0fGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHlhY2h0fGVufDB8fDB8fHwy",
]

const Yachts = () => {
  const [selectedYacht, setSelectedYacht] = useState(null)

  const handleLearnMore = (yacht) => {
    setSelectedYacht(yacht)
  }

  const closeModal = () => {
    setSelectedYacht(null)
  }

  return (
    <div className="boats">
      <HeroSection
        imageSrc={yachtImage}
        title="Luxury Yachts"
        description="Experience the finest yachts designed for ultimate comfort and style."
      />

      <div className="boats-body">
        <h2 className="section-title mt-5">Featured Yachts</h2>
        <div className="row mx-md-3">
          {yachts.map((yacht, index) => (
            <FeatureCard
              key={index}
              title={yacht.title}
              description={yacht.description}
              imageSrc={yacht.imageSrc}
              onLearnMore={() => handleLearnMore(yacht)}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedYacht && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
              <img src={selectedYacht.imageSrc} alt={selectedYacht.title} className="modal-image mb-3" />
              <h3>{selectedYacht.title}</h3>
              <p>
                <strong>Model:</strong> {selectedYacht.model}
              </p>
              <p>
                <strong>Type:</strong> {selectedYacht.type}
              </p>
              <p>{selectedYacht.details}</p>
            </div>
          </div>
        )}

        <h2 className="section-title mt-5">Gallery</h2>
        <Gallery images={galleryImages} />
      </div>

      <div className="cta-section text-center my-5 ">
        <h2>Your Dream Yacht Awaits</h2>
        <a href="/contact-us" className="btn btn-highlight btn-lg text fs-4 px-5 py-4">
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default Yachts
