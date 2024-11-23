import React, { useState } from "react"
import PropTypes from "prop-types"

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc)
  }

  const closeImage = (e) => {
    if (e.target.classList.contains("gallery-overlay")) {
      setSelectedImage(null)
    }
  }

  return (
    <div className="gallery">
      {images.map((imageSrc, index) => (
        <img
          key={index}
          src={imageSrc}
          alt={`Gallery Item ${index + 1}`}
          className="img-fluid rounded"
          onClick={() => handleImageClick(imageSrc)}
        />
      ))}

      {selectedImage && (
        <div className="gallery-overlay" onClick={closeImage}>
          <div className="expanded-image-container">
            <button className="close-btn" onClick={() => setSelectedImage(null)} aria-label="Close">
              &times;
            </button>
            <img src={selectedImage} alt="Expanded view" className="expanded-image" />
          </div>
        </div>
      )}
    </div>
  )
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Gallery
