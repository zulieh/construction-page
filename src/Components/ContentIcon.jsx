import React from 'react';

export default function ContentIcon({ children, title, text }) {
  return (
    <div className='flex flex-col items-center text-center p-4'>
      <div className='flex flex-col items-center gap-4 hover:text-orange-600'>
        <div className="flex justify-center items-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-orange-600 hover:animate-bounce">
          <div className='m-2 text-4xl md:text-5xl text-orange-900'>
            {children}
          </div>
        </div>
        <h2 className='text-xl md:text-3xl w-full pb-4'>{title}</h2>
      </div>
      <p className='text-sm md:text-base px-4'>{text}</p>
    </div>
  );
}
