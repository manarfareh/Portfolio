import React, { useState } from 'react';
import {motion} from 'framer-motion'

const ImageSlider = ({ imgSrc }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imgSrc.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imgSrc.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full  mx-auto bg-transparent">
      <div className="relative">
        <motion.img
          src={imgSrc[currentImageIndex]}
          alt={`Carousel Image ${currentImageIndex + 1}`}
          className="object-contain w-full h-48 md:h-64 lg:h-96"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <button
          onClick={previousImage}
          className="absolute left-0 ml-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 text-white bg-gray-900 rounded-full hover:bg-gray-800 transition duration-300"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 mr-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 text-white bg-gray-900 rounded-full hover:bg-gray-800 transition duration-300"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
