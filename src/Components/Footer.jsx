import React from "react";
import { IoLogoChrome } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-[url('/images/con8.jpg')] bg-cover bg-center opacity-85 p-8 pt-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 md:px-10 lg:px-28">
                <div>
                    <div className="text-white flex items-center font-bold text-lg cursor-pointer">
                        <span className="text-2xl mr-2">
                            <IoLogoChrome />
                        </span>
                        <p>Multiservices Solutions</p>
                    </div>
                    <h2 className="mt-5 text-sm md:text-base lg:text-lg">
                        Over the years in the construction industry, our team of architects and workers 
                        has completed thousands of buildings, and provided many construction-related services, 
                        including reconstruction, repair, consulting, and more.
                    </h2>
                </div>

                <div className="flex flex-col md:pl-10 lg:pl-20">
                    <li className="hover:text-orange-600 mt-3 cursor-pointer">Home</li>
                    <li className="hover:text-orange-600 mt-3 cursor-pointer">About</li>
                    <li className="hover:text-orange-600 mt-3 cursor-pointer">Project</li>
                    <li className="hover:text-orange-600 mt-3 cursor-pointer">Services</li>
                    <li className="hover:text-orange-600 mt-3 cursor-pointer">Contact</li>
                </div>

                <div className="flex flex-col md:pl-8 lg:pl-16">
                    <li className="hover:text-orange-600 mt-3 cursor-pointer">Lagos, Nigeria</li>
                    <li className="hover:text-orange-600 mt-3 cursor-pointer">08138349856</li>
                    <li className="hover:text-orange-600 mt-3 cursor-pointer">tzuleiha@gmail.com</li>
                    <li className="hover:text-orange-600 mt-3 cursor-pointer">Monday-Saturday: 8am- 6pm</li>
                    <li className="hover:text-orange-600 mt-3 cursor-pointer">Saturday & Sunday: closed</li>
                </div>
            </div>

            <div className="flex flex-col items-center pt-5 px-5 md:px-10 lg:px-20">
                <div className="bg-gray-900 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                    <MdOutlineKeyboardDoubleArrowUp size={24} />
                </div>
                <p className="text-center pt-3 border-t border-gray-500 w-full">&copy; 2024 Karion by zu</p>
            </div>
        </div>
    );
};

export default Footer;
