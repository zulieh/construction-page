import React from 'react'

export default function PrimaryButton({ children, className }) {
  return (
    <div className="mt-4 md:mt-6 lg:mt-8 xl:mt-10">
      <button
        className={`p-2 md:p-3 lg:p-4 text-white bg-orange-600 text-lg md:text-xl lg:text-2xl rounded ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
