import React from 'react';

const CircleButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-12 h-12 bg-orange-500 text-black rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {children}
    </button>
  );
}

export default CircleButton;
