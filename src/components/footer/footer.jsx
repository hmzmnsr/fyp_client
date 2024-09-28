import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return (
        <div className='bg-primary-color'>
            <div className='grid grid-cols-12 mt-10 border-b-2 border-b-red-600 pb-3 mx-20'>
                <div className='col-span-3 mx-16 my-10'>
                    <div className='text-white text-xl font-bold border-b-2 border-b-red-600 pb-3'>About Us</div>
                    <div className='text-white text-lg mt-4 leading-8'>At the University of South Asia, creativity and innovation flourish, enriching academic pursuits. A vibrant environment fosters inventive thinking, empowering students to shape novel solutions and drive positive change across disciplines.</div>
                </div>
                <div className='col-span-3 mx-16 my-10'>
                    <div className='text-white text-xl font-bold border-b-2 border-b-red-600 pb-3'>Links</div>
                    <div className='flex flex-col text-white text-lg'>
                        <NavLink to="/events" className="mt-4 hover:text-red-600">
                            Events
                        </NavLink>
                        <NavLink to="/faculty" className="mt-2 hover:text-red-600">
                            Faculty
                        </NavLink>
                        <NavLink to="/gallery" className="mt-2 hover:text-red-600">
                            Gallery
                        </NavLink>
                        <NavLink to="/downloads" className="mt-2 hover:text-red-600">
                            Downloads
                        </NavLink>
                        <NavLink to="/reachus" className="mt-2 hover:text-red-600">
                            Reach Us
                        </NavLink>
                    </div>
                </div>
                <div className='col-span-3 mx-16 my-10'>
                    <div className='text-white text-xl font-bold border-b-2 border-b-red-600 pb-3'>Contact Us</div>
                    <div className='text-white text-lg mt-4 leading-8 flex items-center'><MdEmail className='mr-2 text-white' /> admissions@usa.edu.pk</div>
                    <div className='text-white text-lg leading-8 flex items-center'><FaPhone className='mr-2 text-white' /> +92 311 711 1112</div>
                    <div className='text-white text-lg leading-8 flex items-center'><FaPhone className='mr-2 text-white' /> +92 333 453 6239</div>
                    <div className='text-white text-xl font-bold border-b-2 border-b-red-600 pb-3 mt-10'>Follow Us</div>
                    <div className='flex items-center mt-4'>
                        <a href="https://pk.linkedin.com/school/university-of-south-asia/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='text-white text-xl mr-5 hover:text-red-600' />
                        </a>
                        <a href="https://www.facebook.com/USALAHORE/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookSquare className='text-white text-xl mr-5 hover:text-red-600' />
                        </a>
                        <a href="https://www.instagram.com/usalahore/?hl=en" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='text-white text-xl mr-5 hover:text-red-600' />
                        </a>
                        <a href="https://twitter.com/usalahore" target="_blank" rel="noopener noreferrer">
                            <FaSquareXTwitter className='text-white text-xl mr-5 hover:text-red-600' />
                        </a>
                    </div>

                </div>
                <div className='col-span-3 mx-16 my-10'>
                    <div className='text-white text-xl font-bold border-b-2 border-b-red-600 pb-3'>Address</div>
                    <div className='text-white text-lg mt-4 leading-8'>47 Tufail Rd, Saddar Town, Lahore Cantt, Punjab</div>
                </div>
            </div>
            <div className='text-white text-lg flex justify-center items-center py-10'>@All rights reserved. Privacy Policy. Terms and Conditions.</div>
        </div>
    )
}

export default Footer;