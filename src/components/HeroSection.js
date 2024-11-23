// src/components/HeroSection.js
import React from "react"
import PropTypes from "prop-types"

const HeroSection = ({ imageSrc, title, description }) => {
  return (
    <div className="position-relative hero-section">
      <img src={imageSrc} alt={title} className="img-fluid" />
      <div className="overlay position-absolute text-white text-center">
        <h1 className="mb-4">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

HeroSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default HeroSection
