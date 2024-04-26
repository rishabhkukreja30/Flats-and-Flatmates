import React from "react";

const Carousel = ({ flatImages }) => {
  return (
    <div>
      <img src={flatImages[0]} alt="flat-images" />
    </div>
  );
};

export default Carousel;
