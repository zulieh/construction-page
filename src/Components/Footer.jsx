import React from "react";
import { IoLogoChrome } from "react-icons/io";

const Footer = () => {
    return (
        <div className=" bg-[url('/images/con5.jpg')] opacity-85 p-8 pt-20 text-white">
        <div className="grid grid-cols-3  gap-3 p-10 px-28">
            <div>
            <div className="text-white font-bold text-lg cursor-pointer">
          <span className="text-2xl mr-1 pt-2">
          <IoLogoChrome />
          </span>
          Multiservices Solutions
        </div>
            <h2 className="mt-7">Over the years in the construction, our team of architect and worker has made thous ands of buildings, 
                contractors, provide many services about constructions, example: reconstruction, repair,
                 consult and all other kinds of construct.

            </h2>
            </div>
            <div className=" pl-20">
            <li className="hover:text-orange-600 mt-5">Home</li>
            <li className="hover:text-orange-600 mt-5">About</li>
            <li className="hover:text-orange-600 mt-5">Project</li>
            <li className="hover:text-orange-600 mt-5">Services</li>
            <li className="hover:text-orange-600 mt-5">Contact</li>
            </div>
            
            <div className="pl-16"> 
            <li className="hover:text-orange-600 mt-5">Lagos, Nigeria</li>
            <li className="hover:text-orange-600 mt-5">08138349856</li>
            <li className="hover:text-orange-600 mt-5">tzuleiha@gmail.com</li>
            <li className="hover:text-orange-600 mt-5">Monday-Saturday: 8am- 6pm</li>
            <li className="hover:text-orange-600 mt-5">Saturday & Sunday: closed</li>
            </div>
        </div >
        <div className="pt-20 px-20">
            <p className="text-center pt-10 border-t border-gray-500">&copy; 2024 Karion by zu</p>
       </div>
        </div>

    );
   
};

export default Footer;