import React from 'react';

function HeroBanner({ backgroundImage, text }) {
  return (
    <div
      className="flex text-white h-[60vh] lg:h-[90vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full flex items-center justify-center bg-black/50 py-24 md:py-36 lg:py-48">
        <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase text-center px-4">
          {text}
        </h1>
      </div>
    </div>
  );
}

export default HeroBanner;
