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
import PrimaryButton from './Buttons/PrimaryButton';
import ImageGallery from './ImageGallery';
import { Link } from 'react-router-dom';
import AnimateSection from './AnimateSection';

const Landing = () => {
    const images = [
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1504964670878-71b73cec0ce1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1512403754473-27835f7b9984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1448301858776-07f780e9c9da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D',
    ];

    return (
        <div className='container mx-auto'>
            {/* Carousel Section */}
            <div>
                <CarouselWithContent />
            </div>

            {/* Services Section */}
            <AnimateSection animationType="fade" duration={1}>
            <div className='px-4 md:px-10 pt-10 pb-16'>
                <h1 className='text-3xl md:text-5xl mb-10 text-center'>OUR SERVICES</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <ContentIcon 
                        children={<IoMdSettings />}
                        title="General Construction"
                        text="We have engineers and architects suitable to work with on the majority of items in an entire project, handling all types of projects."
                    />
                    <ContentIcon 
                        children={<FaProjectDiagram />}
                        title="Renovation projects"
                        text="Some of the works have been weather-damaged, tarnished, or outdated for a long time. We provide refurbishment, upgrading, making it like new."
                    />
                    <ContentIcon 
                        children={<GrProjects />}
                        title="Interior design"
                        text="Our architects will help your interiors look like artwork. Along with it is the interior layout, and furnishings are also consulted and installed."
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-12'>
                    <ContentIcon 
                        children={<IoConstructSharp />}
                        title="Consultation projects"
                        text="Having trouble with a classic electrical system? Looking for a custom power solution? Our electrical engineers will help you!"
                    />
                    <ContentIcon 
                        children={<SiConstruct3 />}
                        title="Renovation projects"
                        text="Our experts have many years of technical and construction experience, advising on daily challenges contractors face."
                    />
                    <ContentIcon 
                        children={<LuConstruction />}
                        title="Projects Partnering"
                        text="We co-operate with many reputable contractors, undertaking large and small projects, covering all aspects of electricity, irrigation, bridges, etc."
                    />
                </div>
            </div>
            </AnimateSection>

            {/* Recent Projects Section */}
            <div className="relative py-16 md:py-24 text-white">
                <div className="absolute inset-0 bg-[url('/images/con8.jpg')] opacity-30"></div>
                <div className='relative px-4 md:px-32'>
                    <h2 className='text-center text-2xl md:text-3xl uppercase border-b-2 py-6 mb-10'>recent projects</h2>
                    <ImageGallery images={images} />
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="p-4 md:p-8 text-center">
                <h2 className='text-center text-4xl md:text-5xl mt-8 md:mt-14'>YOU HAVE <span className='text-orange-600'>DREAMS</span>?</h2>
                <h4 className='text-xl md:text-2xl my-6 md:my-10 text-gray-700'>We will</h4>
                <h1 className='text-4xl md:text-6xl font-bold mt-5'>MAKE IT COME <span className='text-orange-600'>TRUE</span>!</h1>
                <Link to='/contact'>
                <PrimaryButton  
                    children="GET A CALL" 
                    className='mt-10 hover:bg-black'
                />
                </Link>
            </div>
        </div>
    );
}

export default Landing;
