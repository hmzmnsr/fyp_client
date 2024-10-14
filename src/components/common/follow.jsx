import React from "react";
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FollowUs = () => {
    return (
        <div className="mx-16 my-20 py-5 px-10">
            <div className="grid grid-cols-12 shadow-2xl py-10">
              
                <div className="col-span-5 text-4xl font-bold flex justify-end items-center text-primary-color">For More Updates Follow Us</div>
                <div className="col-span-7">
                    <div className='flex justify-center items-center'>
                        <a href="https://pk.linkedin.com/school/university-of-south-asia/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='text-blue-700 text-5xl hover:text-red-800 mx-10' />
                        </a>
                        <a href="https://www.facebook.com/USALAHORE/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookSquare className='text-secondary-color text-5xl hover:text-red-800 mx-10' />
                        </a>
                        <a href="https://www.instagram.com/usalahore/?hl=en" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='text-pink-500 text-5xl hover:text-red-800 mx-10' />
                        </a>
                        <a href="https://www.youtube.com/@UniversityofSouthAsiaOfficial/videos" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className='text-red-500 text-5xl hover:text-red-800 mx-10' />
                        </a>
                        <a href="https://twitter.com/usalahore" target="_blank" rel="noopener noreferrer">
                            <FaSquareXTwitter className='text-black text-5xl hover:text-red-800 mx-10' />
                        </a>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default FollowUs;