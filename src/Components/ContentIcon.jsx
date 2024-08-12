import React from 'react'

export default function ContentIcon({children, title, text}) {
  return (
    <div className= ''>
        <div className='flex gap-4 hover:text-orange-600 '>
        <div className="flex justify-center items-center h-20 w-20 rounded-full bg-orange-600 hover:animate-bounce">
           <icon className='m-2 text-5xl text-orange-900'>{children}</icon>
        </div>
         <h2 className='text-3xl w-3 pb-6 ml-5'>{title}</h2>
         </div>
         <p className='ml-28'>{text}</p>
      </div>
  )
}
