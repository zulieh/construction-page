import React from "react";
import { IoLogoChrome } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";


const Footer = () => {
    return (
        <div className=" bg-[url('/images/con8.jpg')] opacity-85 p-8 pt-10 text-white">
        <div className="grid grid-cols-3  gap-3 p-5 px-28">
            <div>
        <div className="text-white flex font-bold text-lg cursor-pointer">
          <span className="text-2xl mr-1 pt-2">
          <IoLogoChrome />
          </span>
          <p className="mt-2">Multiservices Solutions</p>
          
        </div>
            <h2 className="mt-5">Over the years in the construction, our team of architect and worker has made thous ands of buildings, 
                contractors, provide many services about constructions, example: reconstruction, repair,
                 consult and all other kinds of construct.

            </h2>
            </div>
            <div className=" pl-20">
            <li className="hover:text-orange-600 mt-3">Home</li>
            <li className="hover:text-orange-600 mt-3">About</li>
            <li className="hover:text-orange-600 mt-3">Project</li>
            <li className="hover:text-orange-600 mt-3">Services</li>
            <li className="hover:text-orange-600 mt-3">Contact</li>
            </div>
            
            <div className="pl-16"> 
            <li className="hover:text-orange-600 mt-3">Lagos, Nigeria</li>
            <li className="hover:text-orange-600 mt-3">08138349856</li>
            <li className="hover:text-orange-600 mt-3">tzuleiha@gmail.com</li>
            <li className="hover:text-orange-600 mt-3">Monday-Saturday: 8am- 6pm</li>
            <li className="hover:text-orange-600 mt-3">Saturday & Sunday: closed</li>
            </div>
        </div >
        <div className="pt-5 px-20">
            <div className="bg-gray-900 w-10 h-10 ">
            <MdOutlineKeyboardDoubleArrowUp size={35} />
            </div>
            <p className="text-center pt-3 border-t border-gray-500">&copy; 2024 Karion by zu</p>
       </div>
        </div>

    );
   
};

export default Footer;