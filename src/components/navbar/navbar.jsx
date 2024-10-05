import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";



const Navbar = () => {

  return (
    <div className='grid grid-cols-12 bg-primary-color w-full py-6'>
      <div className="col-span-3 flex justify-center items-center"><img src={logo} alt='logo' className='h-16' /></div>
      <div className='col-span-1 flex justify-center items-center'><NavLink to="/" className={() => "py-3 px-4 text-xl text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100"}><span>Home</span></NavLink></div>
      <div className='col-span-1 flex justify-center items-center'><NavLink to="/programs" className={() => "py-3 px-4 text-xl text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100"}><span>Programs</span></NavLink></div>
      <div className='col-span-1 flex justify-center items-center'><NavLink to="/faculty" className={() => "py-2 px-4 text-xl text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100"}><span>Faculty</span></NavLink></div>
      <div className='col-span-1 flex justify-center items-center'><NavLink to="/events" className={() => "py-3 px-4 text-xl text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100"}><span>Events</span></NavLink></div>
      <div className='col-span-1 flex justify-center items-center'><NavLink to="/resources" className={() => "py-3 px-4 text-xl text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100"}><span>Resources</span></NavLink></div>
      <div className='col-span-1 flex justify-center items-center'><NavLink to="/reachus" className={() => "py-3 px-4 text-xl text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100"}><span>Reach Us</span></NavLink></div>
      <div className='col-span-1 relative flex justify-center items-center group'>
        <div className='cursor-pointer text-white text-xl flex justify-center items-center'>
          Extras
        </div>
        <div className='hidden group-hover:block absolute top-16 left-0 bg-white border border-gray-300 rounded-md shadow-lg w-full text-center z-50'>
          <NavLink
            to="/alumni"
            className="text-xl block px-4 py-3 mx-2 text-primary-color relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100"
          >
            Alumni
          </NavLink>
          <NavLink
            to="/gallery"
            className="text-xl block px-4 py-3 mx-2 text-primary-color relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/downloads"
            className="text-xl block px-4 py-3 mx-2 mb-4 text-primary-color relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100"
          >
            Downloads
          </NavLink>
        </div>
      </div>

      <div className='col-span-2 flex justify-center items-center'>
        <a href="https://portal-usa-edu.com/" target="_blank" rel="noopener noreferrer" className='px-10 py-4 bg-secondary-color hover:bg-red-700 text-white rounded-2xl transition duration-300 ease-in-out'>
          Portal
        </a>
      </div>
    </div>

  );
};

export default Navbar;
