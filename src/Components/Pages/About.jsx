import React from 'react';

function About() {
  return (
   <>
    <div className=" bg-[url('/images/con1.jpg')] p-48 pt-20 text-white">
      <h1 className="text-6xl mt-36">About Lev-kal</h1>
    </div>
    <div className='mt-16 p-40'>
    <div className='grid grid-cols-2 gap-16'>
      <div className=''>
        <h2>WE RECEIVE AND THOROUGHLY SOLVE THE CONSTRUCTION PROBLEMS</h2>
        <p>We delivers building and civil engineering projects for both public and private sector clients. 
          With an impressive track record, we provide a comprehensive service through Design and Build,
           Public Private Partnership (PPP), Framework Partnering and traditional contracts all around the domestic.
        </p>
          <p>Working through our network of regional offices, the strength of our Building team lies in its ability
             to combine local presence and knowledge with an absolute focus on our client’s requirements,
             delivers quality construction projects in a safe, professional and sustainable manner.
          </p>
           <p>We can also boast a long track record in all aspects of civil engineering from major infrastructure 
            projects in the water, road and bridges sectors to specialist expertise in structural solutions,
             architecture, transport… is one of the few contractors that can handle all stages of a project, from geological exploration, 
            site clearance, architectural design, structure caculate, renovation and upgrading projects.
           </p>
      </div>
      <div className=''>
        <span className='border-t border-amber-500'>
        <p className=' py-5'> General construction</p>
        </span>
        
        <p className='border-t border-yellow-700 py-5'> General construction</p>
        <p className='border-t border-yellow-700 py-5'> General construction</p>
        <p className='border-t'> General construction</p>
        <p className='border-t py-5'> General construction</p>
        <p className='border-t'> General construction</p>
        <p className='border-t py-5'> General construction</p>
        <p className='border-t'> General construction</p>




      </div>

    </div>
    </div>
    </>
  );
}

export default About;