import React from 'react';
import HeroBanner from '../HeroBanner';
import { SlLocationPin } from "react-icons/sl";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import PrimaryButton from '../Buttons/PrimaryButton';
import LeafletMap from '../LeafletMap';
import AnimateSection from '../AnimateSection';

function Contact() {
  return (
    <div>
      <HeroBanner 
        backgroundImage="https://images.unsplash.com/photo-1531827951676-4c3cd78ed20b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D" 
        text="Contacts"
      />
      <AnimateSection animationType="slideRight" duration={1}>
      <div className="p-6 md:p-10 lg:p-20">
        <h1 className="text-center py-6 text-xl md:text-2xl lg:text-3xl">
          GET <span className="text-yellow-800">IN TOUCH</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 pt-8">
          <div className="px-4 md:px-8 lg:px-12">
            <h3 className="text-lg md:text-xl lg:text-2xl mb-6">
              You can contact us by call, message, or visit us from Monday to Friday, 8 am - 6 pm.
            </h3>
            <p className="flex items-center py-2 gap-3">
              <SlLocationPin className="text-xl" /> 9 Da-Silva Street, Lekki, Lagos, Nigeria
            </p>
            <p className="flex items-center py-2 gap-3">
              <FaPhone className="text-xl" /> +234 8138348387
            </p>
            <p className="flex items-center py-2 gap-3">
              <MdEmail className="text-xl" /> info@levikan.com
            </p>
            <p className="flex items-center py-2 gap-3">
              <IoTimeOutline className="text-xl" />
              Mon – Fri: 8 am – 6 pm<br />
              Sat & Sun: Closed
            </p>
          </div>
          <div className="px-4 md:px-8 lg:px-12">
            <form className="space-y-6 md:space-y-8">
              <input 
                type="text" 
                placeholder="Name" 
                className="border rounded-md p-2 bg-gray-100 w-full"
              />
              <input 
                type="text" 
                placeholder="Phone"
                className="border rounded-md p-2 bg-gray-100 w-full"
              />
              <input
                type="text" 
                placeholder="Email" 
                className="border rounded-md p-2 bg-gray-100 w-full"
              />
              <input 
                type="text" 
                placeholder="Company" 
                className="border rounded-md p-2 bg-gray-100 w-full"
              />
              <textarea 
                name="text" 
                placeholder="Message" 
                className="border rounded-md p-2 bg-gray-100 w-full h-24"
              ></textarea>
              <PrimaryButton 
                children="Send" 
                className="hover:animate-pulse w-full"
              />
            </form>
          </div>
        </div>
      </div>
      </AnimateSection>
      <div className="w-full">
        <LeafletMap />
      </div>
    </div>
  );
}

export default Contact;
