import React from 'react';
import HeroBanner from './HeroBanner'; 
import ImageGallery from './ImageGallery';

const ProjectDetails = () => {
  const images = [
    'images/con1.jpg',
    'images/con2.jpg',
    'images/con3.jpg',
    'images/con4.jpg',
  ];

  return (
    <div>
      <HeroBanner 
        backgroundImage="images/con6.jpg"
        text="The Silver House"
      />
      <div className="px-5 py-10 md:px-10 lg:px-20 xl:px-40">
        <img 
          src="images/con7.jpg" 
          alt="Project view" 
          className="w-full h-auto max-h-screen rounded-md object-cover" 
        />
      </div>
      <div className="px-5 md:px-10 lg:px-20 xl:px-40">
        <ImageGallery images={images} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-10 md:px-10 lg:px-20 xl:px-40">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">DETAILS</h1>
          <p><strong>Model:</strong> Villa</p>
          <p><strong>Location:</strong> 1369 King St, North Wales</p>
          <p><strong>Value:</strong> $350,000</p>
          <p><strong>Architects:</strong> Mark & Jaden</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">DESCRIPTION</h2>
          <p>
            Make It Yours: From studio apartments to 4-bedroom villas, we know that homes are not just a matter of space, 
            but also of family. We spend time understanding your lifestyle, and that of everyone you share your home with.
            Our recommendations are personalized to you, taking into account how you use your space. With a total area of 
            over 5000 square meters of new construction, and a total value of completed projects up to more than $500,000, 
            the interior finish and handover occurred in 2016. Morbi quis justo velit. Duis semper lacus scelerisque, 
            aliquam leo quis, tailiser...
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
