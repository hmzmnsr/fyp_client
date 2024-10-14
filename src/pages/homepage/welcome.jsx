import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";
import bg from "../../assets/hpbanner.jpg";

const OverlayPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        minHeight: '100vh',
        paddingBottom: '50px'
      }}>
        
        <div className='grid grid-cols-12 w-full py-6 bg-transparent'>
          <div className="col-span-3 flex justify-center items-center">
            <img src={logo} alt='logo' className='h-16' />
          </div>

          <div className='col-span-1 flex justify-center items-center'>
            <NavLink to="/" className="py-3 px-4 text-xl text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100">
              <span>Home</span>
            </NavLink>
          </div>

          <div className='col-span-1 flex justify-center items-center'>
            <NavLink to="/programs" className="py-3 px-4 text-xl text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100">
              <span>Programs</span>
            </NavLink>
          </div>

          <div className='col-span-1 flex justify-center items-center'>
            <NavLink to="/faculty" className="py-2 px-4 text-xl text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100">
              <span>Faculty</span>
            </NavLink>
          </div>

          <div className='col-span-1 flex justify-center items-center'>
            <NavLink to="/events" className="py-3 px-4 text-xl text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100">
              <span>Events</span>
            </NavLink>
          </div>

          <div className='col-span-1 flex justify-center items-center'>
            <NavLink to="/resources" className="py-3 px-4 text-xl text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100">
              <span>Resources</span>
            </NavLink>
          </div>

          <div className='col-span-1 flex justify-center items-center'>
            <NavLink to="/reachus" className="py-3 px-4 text-xl text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-secondary-color after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:after:scale-x-100">
              <span>Reach Us</span>
            </NavLink>
          </div>

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
                Documents
              </NavLink>
            </div>
          </div>

          <div className='col-span-2 flex justify-center items-center'>
            <a href="https://portal-usa-edu.com/" target="_blank" rel="noopener noreferrer" className='px-10 py-4 bg-secondary-color hover:bg-red-700 text-white rounded-2xl transition duration-300 ease-in-out'>
              Portal
            </a>
          </div>
        </div>

        <div className="my-20">
          <div className="grid grid-cols-12">
            <div className='col-span-1'></div>
            <div className="col-span-3 text-7xl text-white font-semibold">
              <span className="block my-5">Welcome</span>
              <span className="block my-5">to</span>
              <span className="block my-5">the</span>
              <span className="block my-5">Computer</span>
              <span className="block my-5">Science</span>
              <span className="block my-5">Department</span>
            </div>
            <div className='col-span-1'></div>
            
            <div className="col-span-6 text-2xl text-white px-10 leading-10 text-justify mt-32">
              <div>
                We are delighted to have you explore our vibrant community dedicated to innovation, learning, and excellence in the field of computer science. Our department offers a range of programs designed to equip students with the knowledge and skills necessary to thrive in the ever-evolving tech landscape. With a faculty of experienced professionals, cutting-edge research facilities, and a curriculum that combines theory with hands-on practice, we prepare our students for successful careers in software development, data science, cybersecurity, and more.
              </div>
            </div>
            <div className='col-span-1'></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OverlayPage;
