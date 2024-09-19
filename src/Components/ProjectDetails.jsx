import React, {useState} from 'react';
import HeroBanner from './HeroBanner'; 
import ImageGallery from './ImageGallery';

const ProjectDetails = () => {

  const images = [
    'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1526546334624-2afe5b01088d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1504964670878-71b73cec0ce1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1512403754473-27835f7b9984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1448301858776-07f780e9c9da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D',
];
  
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleImageClick = (imageUrl) => {
      setSelectedImage(imageUrl);
    };

  return (
    <div>
      <HeroBanner 
        backgroundImage="https://images.unsplash.com/photo-1512403754473-27835f7b9984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D"
        text="The Silver House"
      />
      <div className="px-5 py-16 md:px-10 lg:px-20 xl:px-40">
        <img 
          src={selectedImage}
          alt="Project view" 
          className="w-full h-auto max-h-screen rounded-md object-cover" 
        />
      </div>
      <div className="px-5 md:px-10 lg:px-20 xl:px-40">
        <ImageGallery images={images} onImageClick={handleImageClick} />
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
