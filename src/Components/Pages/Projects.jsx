import React, { useState } from 'react';
import HeroBanner from '../HeroBanner';
import { Link } from 'react-router-dom';

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
    { src: 'images/con1.jpg', category: 'BUILDING', caption: 'House Image', id: 1 },
    { src: 'images/con3.jpg', category: 'FLATS', caption: 'Flat Image', id: 2 },
    { src: 'images/con4.jpg', category: 'TERRACE', caption: 'Terrace Image', id: 3 },
    { src: 'images/con5.jpg', category: 'SERVICED', caption: 'Serviced Image', id: 4 },
    { src: 'images/con6.jpg', category: 'AIRPORT', caption: 'Airport Image', id: 5 },
    { src: 'images/con7.jpg', category: 'AIRPORT', caption: 'Airport Image', id: 6 },
  ];

  const filteredImages = selectedCategory === 'ALL'
    ? images
    : images.filter(image => image.category === selectedCategory);

  return (
    <div>
      <HeroBanner 
        backgroundImage="/images/con6.jpg"
        text="Projects"
      />
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
    </div>
  );
}

export default Projects;
