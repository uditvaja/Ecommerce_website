

import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.css';

const GallerySection = () => {
  const images = [
    {
      original: 'https://www.mouser.in/images/arduino/lrg/A000073_SPL.jpg',
      thumbnail: 'https://www.mouser.in/images/arduino/lrg/A000073_SPL.jpg',
      description: 'Aurduno',
    },
    {
      original: 'https://www.electronicscomp.com/image/cache/catalog/dt830d-1000v-dc-750v-ac-digital-multimeter-400x400.JPG',
      thumbnail: 'https://www.electronicscomp.com/image/cache/catalog/dt830d-1000v-dc-750v-ac-digital-multimeter-400x400.JPG',
      description: 'Digital Multimeter',
    },
    {
      original: 'https://images.ctfassets.net/4yflszkpcwkt/6Y2TsR3c4hiTNG9fZiCJca/6f07e525a1ffab22ba9a040b311f3687/capacitors.jpg',
      thumbnail: 'https://images.ctfassets.net/4yflszkpcwkt/6Y2TsR3c4hiTNG9fZiCJca/6f07e525a1ffab22ba9a040b311f3687/capacitors.jpg',
      description: 'Cute Kitty 3',
    },
    {
      original: 'https://m.media-amazon.com/images/I/81erhHVE6OL._SL1500_.jpg',
      thumbnail: 'https://m.media-amazon.com/images/I/81erhHVE6OL._SL1500_.jpg',
      description: 'Breadboard 840 point ',
    },

  ];

  return (
    <div className="gallery-section">
      <h2>Explore Our Products</h2>
      <Gallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={true}
        thumbnailPosition="left"
        renderLeftNav={(onClick, disabled) => (
          <button style={{ backgroundColor: "black" }}
            type="button"
            className={`image-gallery-icon image-gallery-left-nav ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" style={{ backgroundColor: "black" }}>
              <path
                d="M10 17l5-5-5-5v10z"
                fill="#fff"
              />
            </svg>
          </button>
        )}
        renderRightNav={(onClick, disabled) => (
          <button style={{ backgroundColor: "black" }}
            type="button"
            className={`image-gallery-icon image-gallery-right-nav ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M14 7l-5 5 5 5V7z"
                fill="#fff"
              />
            </svg>
          </button>
        )}
        renderItem={(item) => (
          <div className="image-gallery-item">
            <img
              src={item.original}
              alt={item.description}
              className="image-gallery-image"
            />
            <div className="image-gallery-description">{item.description}</div>
          </div>
        )}
      />
    </div>
  );
};

export default GallerySection;
