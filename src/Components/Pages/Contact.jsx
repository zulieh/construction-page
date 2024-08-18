import React from 'react'
import HeroBanner from '../HeroBanner'
import { SlLocationPin } from "react-icons/sl";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";



function Contact() {
  return (
    <div>
      <HeroBanner 
      backgroundImage="/images/con3.jpg" 
      text="Contacts"
      />
      <div className='p-28'>
      <h1 className='text-center py-10'>GET <span className='text-yellow-800'>IN TOUCH</span></h1>
      <div className='grid grid-cols-2'>
        <div>
          <h3>You can contact us by a call, a message or visit us From monday to friday. From 8 am - 6 pm</h3>
          <p className='flex py-3 '><SlLocationPin /> 9 da-silva street, lekki, Lagos, Nigeria</p>
          <p className='flex py-3'><FaPhone /> +234 8138348387 </p>
          <p className='flex'><MdEmail />info@levikan.com</p>
          <p className='flex py-3'><IoTimeOutline/>Mon – Fri:8 am – 6 pm<br></br>
           Sat & Sun: Closed</p>
        
        </div>
        <div>
          <form className='p-5 '>
           <input type='text' placeholder='Name' className='border rounded-md p-2 bg-gray-100 '/>
           <input type='text' placeholder='Phone'className='border rounded-md p-2 bg-gray-100 ' /><br></br>
           <input type='text' placeholder='Email' className='border rounded-md p-2 bg-gray-100 '/>
           <input type='text' placeholder='Company' className='border rounded-md p-2 bg-gray-100 '/>
           <textarea name="text" placeholder="message" className='border rounded-md p-2 bg-gray-100 '></textarea>
          </form>
        </div>
        <div>

        </div>

      </div>
      </div>
    </div>
  )
}

export default Contact