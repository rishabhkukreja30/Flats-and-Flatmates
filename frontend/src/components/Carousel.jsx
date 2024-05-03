import React, { useState, useEffect } from "react";

const Carousel = ({ flatImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % flatImages.length;
      setCurrentIndex(newIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, flatImages.length]);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + flatImages.length) % flatImages.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % flatImages.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full p-4 border-2 border-white rounded-xl">
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {flatImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            data-carousel-item
          >
            <img
              src={image}
              className="absolute block w-full h-full object-cover top-0 left-0"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
        {/* Slide buttons */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {flatImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full bg-white ${
                index === currentIndex ? "" : ""
              }`}
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
            ></button>
          ))}
        </div>
      </div>
      {/* Previous slide button */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="sr-only">Previous</span>
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      {/* Next slide button */}
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="sr-only">Next</span>
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
