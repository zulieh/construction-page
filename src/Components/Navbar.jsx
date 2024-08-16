import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import { IoLogoChrome } from "react-icons/io";

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/landing" },
    { name: "ABOUT", link: "/about" },
    { name: "SERVICES", link: "/services" },
    { name: "PROJECTS", link: "/projects" },
    { name: "TEAM", link: "/team" },
    { name: "CONTACT", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md fixed w-full top-0 left-0 bg-white">
      <div className="md:flex items-center justify-between py-4 px-10 md:px-20">
        <div className=" font-bold text-lg cursor-pointer flex items-center">
          <span className="text-2xl mr-1 pt-2">
          <IoLogoChrome />
          </span>
          Multiservices Solutions
        </div>
        <div onClick={()=> setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <CiMenuKebab name={open ? 'close' : 'menu'}/>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1]
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 
        ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 text-black md:my-0 my-7">
              <Link to={link.link} className="hover:text-orange-400 duration-500">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
