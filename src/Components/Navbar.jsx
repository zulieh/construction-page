import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import { IoLogoChrome } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const Links = [
    { name: "HOME", link: "/landing" },
    { name: "ABOUT", link: "/about" },
    { name: "PROJECTS", link: "/projects" },
    { name: "SERVICES", link: "/services" },
    { name: "CONTACT", link: "/contact" },
  ];

  const serviceLinks = [
    { name: "Services 1", link: "/services/projectDetails" },
    { name: "Services 2", link: "/services/projectDetails" },
    { name: "Services 3", link: "/services/projectDetails" },
  ];

  return (
    <div className="shadow-md fixed w-full top-0 left-0 bg-white z-50">
      <div className="md:flex items-center justify-between py-4 px-5 md:px-10 lg:px-20">
        <div className="font-bold text-lg cursor-pointer flex items-center">
          <span className="text-2xl mr-1 pt-2">
            <IoLogoChrome />
          </span>
          Multiservices Solutions
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <CiMenuKebab name={open ? 'close' : 'menu'} />
        </div>
        <ul className={` bg-white md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1]
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 
        ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
          {Links.map((link, index) => (
            <li
              key={index}
              className="md:ml-8 text-black md:my-0 my-7 relative"
              onMouseEnter={() => link.name === "SERVICES" && setDropdownOpen(true)}
              onMouseLeave={() => link.name === "SERVICES" && setDropdownOpen(false)}
            >
              {link.name === "SERVICES" ? (
                <>
                  <div className="flex items-center cursor-pointer">
                    <span>SERVICES</span>
                    <AiOutlineDown className="ml-2" />
                  </div>
                  {dropdownOpen && (
                    <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-40">
                      {serviceLinks.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="px-4 py-2 hover:bg-gray-200">
                          <Link to={service.link} className="hover:text-orange-400 duration-500">
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={link.link} className="hover:text-orange-400 duration-500">
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
