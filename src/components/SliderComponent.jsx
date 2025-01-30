import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample images for the slider
const images = [
  "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_mufasa_poster_v1_eb23f7a5.jpeg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full mx-auto max-w-7xl">
      {/* Image Display */}
      <motion.div
        key={currentIndex}
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="object-cover w-full h-auto rounded-lg"
        />
      </motion.div>

      {/* Navigation Buttons */}
      <div className="absolute left-0 p-4 transform -translate-y-1/2 top-1/2">
        <button
          onClick={prevSlide}
          className="p-2 text-white transition duration-300 bg-gray-900 rounded-full opacity-75 hover:opacity-100"
        >
          &#60;
        </button>
      </div>
      <div className="absolute right-0 p-4 transform -translate-y-1/2 top-1/2">
        <button
          onClick={nextSlide}
          className="p-2 text-white transition duration-300 bg-gray-900 rounded-full opacity-75 hover:opacity-100"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Slider;
