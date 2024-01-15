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
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal">
          <img
            src={require(`./petPictures/${selectedImage}`)}
            alt={`Selected Image`}
            className="full-size-image"
          />
          <button onClick={() => setSelectedImage(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Happiness;
