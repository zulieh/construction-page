import React from 'react'

export default function PrimaryButton({ children, className}) {
  return (
    <div className='mt-10'>
        <button className={`p-3 text-white  bg-orange-600 text-2xl ${className}`}>
        {children}
    </button>
        </div>
  )
}
