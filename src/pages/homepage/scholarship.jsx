import React from "react";
import scholarshipImage from "../../assets/scholarship/scholarship.webp";

const Scholarship = () => {
  return (
    <div 
      className="relative mx-20 my-20 px-10 py-20 bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-60 before:z-0"
      style={{ backgroundImage: `url(${scholarshipImage})` }}
    >
      <div className="relative z-10 grid grid-cols-12">
        <div className="col-span-2 font-bold text-3xl text-primary-color leading-10 bg-gray-200 flex justify-center items-center px-20 py-10">
          Top 04 Best Financial Aid and Scholarships
        </div>
        <div className="col-span-10 text-bold text-2xl text-white leading-10 px-10 flex justify-center items-center py-10">
          At the University of South Asia, we are dedicated to providing exceptional Financial Aid and Scholarships to support students at every academic level. Our comprehensive scholarship programs include merit-based awards for undergraduate and master’s students, work-based opportunities, and kinship benefits. By offering up to 100% scholarships for top achievers and tailored aid for various needs, we aim to remove financial barriers and enable students to focus on their education across campuses including Cantt and Raiwind Road.
        </div>
      </div>
      <div className="relative z-10 flex justify-center items-center mt-10">
        <a href="https://usa.edu.pk/financial-aid-and-scholarships/" target="_blank" rel="noopener noreferrer">
          <button className="px-10 py-5 bg-gray-200 text-black hover:text-white hover:bg-red-700 transition duration-300 ease-in-out text-lg rounded-full">
            View Scholarships
          </button>
        </a>
      </div>
    </div>
  );
};

export default Scholarship;
