import React, {useState} from 'react'
import HeroBanner from '../HeroBanner'
import { Link } from 'react-router-dom';


function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('ALL')

    const Lists =[
        {name: "ALL", link: "/all"},
        {name: "BUILDING", link:"/building"},
        {name: "FLATS", link: "/flats"},
        {name: "HOUSE", link: "/house"}
    ]

    const images = [
        {src: 'images/con1.jpg', category: 'BUILDING', caption: 'house image', id: 1},
        {src: 'images/con1.jpg', category: 'FLATS', caption: 'ho image', id: 2},
        {src: 'images/con1.jpg', category: 'HOUSE', caption: 'terrace image', id: 3},
        {src: 'images/con1.jpg', category: 'HOUSE', caption: 'duplex image', id: 4},
        {src: 'images/con1.jpg', category: 'HOUSE', caption: 'mansion image', id: 5}

    ]
    const filteredImages = selectedCategory ==='ALL' 
    ? images
    : images.filter(image => image.category === selectedCategory);
  return (

    <div>
        <div className=''>
        <HeroBanner 
        backgroundImage="/images/con6.jpg"
        text="Projects"
        />
        </div>
        <div className='p-10'>
        <ul className={`md:flex md:items-center md:pb-0 pb-12  md:z-auto
        left-0 w-full md:w-auto md:pl-0 transition-all duration-500`}>
          {Lists.map((link, index) => (
            <li key={index} className="md:ml-8 text-black md:my-0 my-7 items-center">
              <Link to={link.link} className={`hover:text-orange-400 duration-500 ${selectedCategory === link.name ? 'text-orange-400' : ''}`}
                onClick={() =>setSelectedCategory(link.name)}
                >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="p-2">
    <div className="grid grid-cols-3 gap-1">
        {filteredImages.map(image => (
             <div key={image.id} className="relative group">
             <img src={image.src} alt={image.caption} className="w-full h-auto rounded-md"/>
             <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <caption className="text-lg font-semibold text-center">{image.caption}</caption>
                 <h4 class="text-sm mt-1 underline">See more</h4>
             </div>
         </div>   
        ))}
       
        {/* <div className="relative group">
            <img src="/images/con3.jpg" alt="Title 3" class="w-full h-auto rounded-md"/>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <caption className="text-lg font-semibold">SILVER COURT</caption>
                <h4 className="text-sm mt-1 underline">See more</h4>
            </div>
        </div> */}
    </div>
</div>

   
</div>

            
        {/* </div> */}
        
    </div>
  )
}

export default Projects