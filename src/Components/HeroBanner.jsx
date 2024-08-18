import React from 'react'

function HeroBanner({backgroundImage, text}) {
  return (
    <div className=" p-48 flex text-white"
     style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="text-6xl mt-36 text-right ">{text}</h1>
    </div>
  )
}

export default HeroBanner;