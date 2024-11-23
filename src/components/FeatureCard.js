import React from "react"
import PropTypes from "prop-types"

const FeatureCard = ({ title, description, onLearnMore, imageSrc }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="feature-card rounded text-center p-4 mx-auto mx-lg-3">
        {imageSrc && <img src={imageSrc} alt={title} className="rounded w-100 mb-3" />}
        <h5 className="m-0">{title}</h5>
        <p className="mt-2">{description}</p>
        {onLearnMore && (
          <button className="btn" onClick={onLearnMore}>
            Learn More
          </button>
        )}
      </div>
    </div>
  )
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onLearnMore: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default FeatureCard
