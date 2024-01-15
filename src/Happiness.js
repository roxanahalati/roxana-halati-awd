import React, { useState } from 'react';
import './Happiness.css';

const Happiness = () => {
  const imageArray = Array.from({ length: 12 }, (_, index) => `${index + 1}.jpeg`);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className='HPageContainer'>
      <div className="image-grid">
        {imageArray.map((image, index) => (
          <img
            key={index}
            src={require(`./petPictures/${image}`)}
            onClick={() => handleImageClick(image)}
            className="grid-item"
            alt="cute pet"
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal">
          <img
            src={require(`./petPictures/${selectedImage}`)}
            className="full-size-image"
            alt="cute pet"
          />
          <button onClick={() => setSelectedImage(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Happiness;
