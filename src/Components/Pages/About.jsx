import React from 'react';
import { MdOutlineMinimize } from "react-icons/md";
import HeroBanner from '../HeroBanner';

function About() {
  return (
    <>
      <HeroBanner 
        backgroundImage="/images/con1.jpg"
        text="About Lev-kal"
      />
      <div className="mt-8 md:mt-12 lg:mt-16 px-6 md:px-16 lg:px-40 py-8 md:py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="mb-6 text-xl md:text-2xl lg:text-3xl font-bold">
              RECEIVE AND THOROUGHLY SOLVE THE CONSTRUCTION PROBLEMS
            </h2>
            <p>
              <span className="text-yellow-800">We</span> deliver building and civil engineering projects for both public and private sector clients.
              With an impressive track record, we provide a comprehensive service through Design and Build,
              Public Private Partnership, Framework Partnering, and traditional contracts all around the domestic.
            </p>
            <p className="py-6 md:py-8 lg:py-10">
              <span className="text-yellow-800">We</span> work through our network of regional offices, the strength of our Building team lies in its ability
              to combine local presence and knowledge with an absolute focus on our client’s requirements,
              delivering quality construction projects in a safe, professional, and sustainable manner.
            </p>
            <p>
              <span className="text-yellow-800">We</span> can also boast a long track record in all aspects of civil engineering from major infrastructure 
              projects in the water, road, and bridges sectors to specialist expertise in structural solutions,
              architecture, transport, and more. We are one of the few contractors that can handle all stages of a project, from geological exploration, 
              site clearance, architectural design, structural calculations, renovation, and upgrading projects.
            </p>
          </div>
          <div className="mt-8 md:mt-12 lg:mt-28">
            {[
              { label: 'General construction', width: 'w-full' },
              { label: 'Consultation', width: 'w-11/12' },
              { label: 'Interior design', width: 'w-10/12' },
              { label: 'Projects partnering', width: 'w-full' },
              { label: 'Renovation', width: 'w-8/12' },
              { label: 'Electrical system', width: 'w-9/12' },
              { label: 'Construction', width: 'w-10/12' },
            ].map(({ label, width }, index) => (
              <div key={index} className="mb-4">
                <MdOutlineMinimize className={`bg-yellow-800 ${width} py-2`} />
                <p className="border-t border-yellow-800 mb-4">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 md:px-16 lg:px-32 text-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl py-6 md:py-10 lg:py-14">
          <span className="text-yellow-800">OUR</span> VISION
        </h1>
        <p className="px-0 md:px-16 lg:px-32 text-left">
          Our vision has been the same since the beginning: to be a dynamic construction company with a passionate commitment 
          to deliver value-added and innovative solutions to our clients’ construction needs.
          We remain focused on building long-lasting relationships by consistently delivering world-class performance.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold py-6 md:py-10 lg:py-14 px-0 md:px-24 lg:px-44">
          “STRIVING TO ACHIEVE PERFECTION WITHIN BUDGET AND WITH CLIENT SATISFACTION”
        </h2>
      </div>
      <div className="px-6 md:px-16 lg:px-32 py-8 md:py-12 lg:py-20">
        <h1 className="text-xl md:text-2xl lg:text-3xl py-6 md:py-10 lg:py-14 text-center">
          <span className="text-yellow-800">OUR</span> CORE VALUES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {[
            { title: 'QUALITY', text: 'Our vision has been the same since the beginning: to be a dynamic construction company with a passionate commitment to deliver value-added and innovative solutions to our clients’ construction needs.' },
            { title: 'INTEGRITY', text: 'Our vision has been the same since the beginning: to be a dynamic construction company with a passionate commitment to deliver value-added and innovative solutions to our clients’ construction needs. We remain focused on building long-lasting relationships.' },
            { title: 'FLEXIBILITY', text: 'Our vision has been the same since the beginning: to be a dynamic construction company with a passionate commitment to deliver value-added and innovative solutions to our clients’ construction needs. We remain focused on building long-lasting relationships by consistently delivering world-class performance.' },
            { title: 'COMMITMENT', text: 'Our vision has been the same since the beginning: to be a dynamic construction company with a passionate commitment to deliver value-added and innovative solutions to our clients’ construction needs. We remain focused on building long-lasting relationships by consistently delivering world-class performance.' },
          ].map(({ title, text }, index) => (
            <div key={index}>
              <h1 className="text-xl md:text-2xl lg:text-3xl text-center py-6 md:py-8 lg:py-10">{title}</h1>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
