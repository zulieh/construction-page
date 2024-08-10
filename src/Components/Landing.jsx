import React from 'react'
import Navbar from './Navbar'
import { CarouselWithContent } from './carousel';
// import lightImage from './assets/images/light.jpg';

const Landing = () => {
  return (
    <div>
        <div className=" translate-x-6 ease-in duration-300">
            <CarouselWithContent />
        </div>  
    </div>
  )
}

export default Landing;