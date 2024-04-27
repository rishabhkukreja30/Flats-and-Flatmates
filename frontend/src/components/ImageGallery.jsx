import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [showAllImages, setShowAllImages] = useState(false);

  const handleClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="bg-gray-950 m-4 mr-0  border-2 border-white p-4 rounded-lg shadow-lg shadow-indigo-700 md:border-r-0">
      <div className="relative">
        {/* Main Image */}
        <img
          src={mainImage}
          alt="Main"
          className="object-cover w-full h-96 md:h-4/5 rounded-lg"
        />
        {/* Thumbnail Images */}
        <div className="absolute bottom-2 left-2 md:left-auto md:right-2  flex space-x-2 overflow-auto">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-14 h-14  object-cover rounded-lg cursor-pointer hover:opacity-80 ${
                !showAllImages && index >= 3 && "hidden"
              }`}
              onClick={() => handleClick(image)}
            />
          ))}
          {/* Number of Additional Images */}
          {images.length > 3 && (
            <div
              className="w-14 h-14 bg-black bg-opacity-75 rounded-lg flex items-center justify-center text-white text-lg font-semibold cursor-pointer"
              onClick={() => setShowAllImages(!showAllImages)}
            >
              {showAllImages ? "-" : `+${images.length - 3}`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
