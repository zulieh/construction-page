import React, { useState } from 'react';
import HeroBanner from '../HeroBanner';
import { Link } from 'react-router-dom';
import AnimateSection from '../AnimateSection';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const Lists = [
    { name: "ALL", id: "all" },
    { name: "BUILDING", id: 1 },
    { name: "FLATS", id: 2 },
    { name: "TERRACE", id: 3 },
    { name: "SERVICED", id: 4 },
    { name: "AIRPORT", id: 5 },
  ];

  const images = [
    { src: 'https://images.unsplash.com/photo-1512403754473-27835f7b9984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D', category: 'BUILDING', caption: 'Mansion Court', id: 1 },
    { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww', category: 'FLATS', caption: 'Silver Court', id: 2 },
    { src: 'https://images.unsplash.com/photo-1512403754473-27835f7b9984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D', category: 'TERRACE', caption: 'The Terrace ', id: 3 },
    { src: 'https://images.unsplash.com/photo-1448301858776-07f780e9c9da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D', category: 'SERVICED', caption: 'Glass House', id: 4 },
    { src: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D', category: 'AIRPORT', caption: 'Faiza Court', id: 5 },
    { src: 'https://images.unsplash.com/photo-1526546334624-2afe5b01088d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D', category: 'AIRPORT', caption: 'Black Door', id: 6 },
  ];

  const filteredImages = selectedCategory === 'ALL'
    ? images
    : images.filter(image => image.category === selectedCategory);

  return (
    <div>
      <HeroBanner 
        backgroundImage="https://images.unsplash.com/photo-1526546334624-2afe5b01088d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D"
        text="Projects"
      />
       <AnimateSection animationType="slideLeft" duration={1}>
      <div className="p-4 md:p-8 lg:p-12">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          {Lists.map((link, index) => (
            <li key={index}>
              <Link 
                to={link.link} 
                className={`text-black hover:text-orange-400 duration-500 ${selectedCategory === link.name ? 'text-orange-400 font-semibold' : ''}`}
                onClick={() => setSelectedCategory(link.name)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map(image => (
            <div key={image.id} className="relative group">
              <img src={image.src} alt={image.caption} className="w-full h-48 object-cover rounded-md"/>
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <caption className="text-lg font-semibold text-center">{image.caption}</caption>
                <Link to="/projectDetails" className="text-sm mt-1 text-yellow-800">See more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </AnimateSection>
    </div>
   
  );
}

export default Projects;
