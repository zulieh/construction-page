import React from 'react';
import Navbar from './Navbar';
import { CarouselWithContent } from './carousel';
import ContentIcon from './ContentIcon';
import { IoMdSettings } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoConstructSharp } from "react-icons/io5";
import { SiConstruct3 } from "react-icons/si";
import { LuConstruction } from "react-icons/lu";
// import { CircleButton } from './Buttons/CircleButton';
import Footer from './Footer';
import PrimaryButton from './Buttons/PrimaryButton';



const Landing = () => {
  return (
    <div className='Container'>
        <div className='h-lvh'>
        <CarouselWithContent />
        </div>
        <div className='px-28 pt-10 '>
            <h1 className='text-5xl mb-10'>OUR SERVICES</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div>
                    <ContentIcon 
                        children= {<IoMdSettings />}
                        title="General Construction"
                        text="We have engineers and architects suitable to work with on 
                        the majority of items in an entire project, handling all types of projects."
                    />
                </div>
                <div>
                    <ContentIcon 
                        children= {<FaProjectDiagram />}
                        title="Renovation projects"
                        text="Some of the works have been weather-damaged, tarnished,or outdated for a long time
                        We provide refurbishment, upgrading, make it like new."
                    />
                </div>
                <div>
                    <ContentIcon 
                        children= {<GrProjects />}
                        title="Interior design"
                        text="Our architects will help your interiors look like an artwork. 
                        Along with it is the interior layout, furnishings are also consulted and installed by."
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-12'>
                <div>
                    <ContentIcon 
                        children= {<IoConstructSharp />}
                        title="Consultation projects"
                        text="Have you had trouble with the classic electrical system? 
                        Are you looking for a custom power solution? Our electrical engineers will help you!"
                    />
                </div>
                <div>
                    <ContentIcon 
                        children= {<SiConstruct3 />}
                        title="Renovation projects"
                        text="Our experts have many years of technical and construction experience, 
                        and they will advise on the daily challenges that contractors to face."
                    />
                </div>
                <div>
                    <ContentIcon 
                        children= {<LuConstruction />}
                        title="Projects Partnering"
                        text="We co-operate with many reputable contractors, undertake many large and small projects, 
                        covering all aspects of electricity, irrigation, bridges etc."
                    />
                </div>
            </div>
        </div>
        <div className=" p-36 text-center">
           <h2 className='text-center text-5xl mt-32'>YOU HAVE <span className='text-orange-600'>DREAMS</span>?</h2>
           <h4 className='text-2xl my-10 text-gray-700'>We will</h4>
           <h1 className='text-6xl font-bold mt-5'>MAKE IT COME <span className='text-orange-600'>TRUE</span>!</h1>
           <PrimaryButton  
           children="GET A CALL" 
           className='hover:bg-black'
           />
        </div>
        <div className='footer'>
        <Footer />
        </div>
       
    </div>
  );
}

export default Landing;
