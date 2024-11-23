// src/components/BoatCard.js
import React from "react"
import PropTypes from "prop-types"

const BoatCard = ({ title, description, imageSrc }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="feature-card shadow-sm rounded text-center p-4">
        <h5 className="mb-3">{title}</h5>
        {imageSrc && <img src={imageSrc} alt={title} className="rounded w-100 mb-3" />}
        <p className="text-muted">{description}</p>
      </div>
    </div>
  )
}

BoatCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string, // Optional prop
}

export default BoatCard
