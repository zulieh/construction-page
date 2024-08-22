import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageGallery = ({ images }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 md:p-3 rounded-full shadow-lg z-10"
      >
        <FaChevronLeft />
      </button>

      {/* Image Row */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll scroll-smooth scrollbar-hide space-x-4 p-4 md:p-5"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`gallery-${index}`}
            className="w-48 md:w-80 h-36 md:h-52 object-cover rounded-lg flex-shrink-0"
          />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 md:p-3 rounded-full shadow-lg z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageGallery;
