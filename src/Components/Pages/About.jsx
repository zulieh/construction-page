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
   <div className='mt-16 p-40'>
    <div className='grid grid-cols-2 gap-16'>
      <div className=''>
        <h2 className='mb-10 text-3xl font-bold'>RECEIVE AND THOROUGHLY SOLVE THE CONSTRUCTION PROBLEMS</h2>
        <p><span className='text-yellow-800'>We</span> delivers building and civil engineering projects for both public and private sector clients. 
          With an impressive track record, we provide a comprehensive service through Design and Build,
           Public Private Partnership, Framework Partnering and traditional contracts all around the domestic.
        </p>
          <p className='py-10'><span className='text-yellow-800'>We</span> working through our network of regional offices, the strength of our Building team lies in its ability
             to combine local presence and knowledge with an absolute focus on our client’s requirements,
             delivers quality construction projects in a safe, professional and sustainable manner.
          </p>
           <p><span className='text-yellow-800'>We</span> can also boast a long track record in all aspects of civil engineering from major infrastructure 
            projects in the water, road and bridges sectors to specialist expertise in structural solutions,
             architecture, transport is one of the few contractors that can handle all stages of a project, from geological exploration, 
            site clearance, architectural design, structure caculate, renovation and upgrading projects.
           </p>
      </div>
      <div className='mt-28'>
        <MdOutlineMinimize className='bg-yellow-800 w-10/12 py-2' />
        <p className='border-t border-yellow-800 mb-5'>General construction</p>

        <MdOutlineMinimize className='bg-yellow-800 w-9/12  py-2' />
        <p className='border-t border-yellow-800 mb-5'>Consultation</p>

        <MdOutlineMinimize className='bg-yellow-800 w-8/12 py-2' />
        <p className='border-t border-yellow-800 mb-5'>Interior design</p>

        <MdOutlineMinimize className='bg-yellow-800 w-10/12 py-2' />
        <p className='border-t border-yellow-800 mb-5'>Projects partnering</p>

        <MdOutlineMinimize className='bg-yellow-800 w-6/12 py-2' />
        <p className='border-t border-yellow-800 mb-5'>Renovation</p>

        <MdOutlineMinimize className='bg-yellow-800 w-7/12 py-2' />
        <p className='border-t border-yellow-800 mb-5'>Electrical system</p>

        <MdOutlineMinimize className='bg-yellow-800 w-8/12  py-2' />
        <p className='border-t border-yellow-800 mb-5'>construction</p>
      </div>
    </div>
    </div>
    <div className='px-32 text-center'>
      <h1 className='text-2xl py-14'><span className='text-yellow-800'>OUR</span> VISION</h1>
      <p className='px-48 text-left'>Our vision has been the same since the beginning: to be a dynamic construction company with a passionate commitment 
         to deliver value-added and innovative solutions to our clients’ construction needs.
         We remain focused on building long lasting relationships by consistently delivering a world-class performance.
         </p>
         <h2 className='text-2xl font-bold py-14 px-44'>“STRIVING TO ACHIEVE PERFECTION WITHIN BUDGET AND WITH CLIENT SATISFACTION”</h2>
    </div>
    <div className='p-20'>
    <h1 className='text-2xl py-14 text-center'><span className='text-yellow-800'>OUR</span> CORE VALUES</h1>
    <div className=' px-14 grid grid-cols-2 gap-10'>
      <div>
        <h1 className='text-2xl text-center py-10'>QUALITY</h1>
        <p>Our vision has been the same since the beginning: to be a dynamic construction company with a passionate commitment 
         to deliver value-added and innovative solutions to our clients’ construction needs.
        </p>
      </div>
      <div>
        <h1 className='text-2xl text-center py-10' >INTEGRITY</h1>
        <p>Our vision has been the same since the beginning: to be a dynamic construction company with a passionate commitment 
         to deliver value-added and innovative solutions to our clients’ construction needs.
         We remain focused on building long lasting relationships.</p>
      </div>
      <div>
        <h1 className='text-2xl text-center py-10' >FLEXIBILITY</h1>
        <p>Our vision has been the same since the beginning: to be a dynamic construction company with a passionate commitment 
         to deliver value-added and innovative solutions to our clients’ construction needs.
         We remain focused on building long lasting relationships by consistently delivering a world-class performance 
         by consistently delivering a world-class performance  by consistently delivering a world-class performance.</p>
      </div>
      <div>
        <h1 className='text-2xl text-center py-10' >COMMITMENT</h1>
        <p>Our vision has been the same since the beginning: to be a dynamic construction company with a passionate commitment 
         to deliver value-added and innovative solutions to our clients’ construction needs.
         We remain focused on building long lasting relationships by consistently delivering a world-class performance.</p>
      </div>
    </div>

    </div>
    </>
  );
}

export default About;