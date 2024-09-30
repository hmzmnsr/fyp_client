import React from 'react';
import alumni_img from "../../assets/alumni/alumni.webp";

const AlumniWelcome = () => {
    return (
        <div className='grid grid-cols-12 mx-20 my-20'>
            <div className='col-span-3 flex flex-col px-10 py-10 bg-gray-100 '>
                <div className='text-primary-color font-bold text-4xl' style={{ lineHeight: '45px' }}>Welcome to the esteemed University of South Asia Alumni Network!</div>
                <div className="mt-5 text-xl text-primary-color leading-8">You join a vibrant community of over 15,000 talented individuals, all connected by their USA experience. Our mission is to empower you to excel, both personally and professionally. We offer valuable resources, career guidance, and opportunities to connect with fellow alumni and mentors. Stay engaged, participate in exciting events, and leverage the network to reach your full potential!</div>
            </div>
            <div className='col-span-9 flex justify-center items-center'><img src={alumni_img} alt='alumni' className='object-cover w-full py-10 px-10'/></div>
        </div>
    )
}

export default AlumniWelcome;