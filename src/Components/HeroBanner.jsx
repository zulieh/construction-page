import React from 'react';
import AnimateSection from './AnimateSection';

function HeroBanner({ backgroundImage, text }) {
  return (
    <AnimateSection animationType="slideUp" duration={1}
      className="flex text-white h-[60vh] lg:h-[80vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full flex items-center justify-center bg-black/50 py-24 md:py-36 lg:py-48">
        <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase text-center px-4">
          {text}
        </h1>
      </div>
    </AnimateSection>
  );
}

export default HeroBanner;
