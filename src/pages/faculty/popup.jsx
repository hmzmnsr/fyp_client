import React from "react";
import fac5 from "../../assets/faculty/fac5.jpg";

const FacultyPopup = () => {
    return(
        <div className="grid grid-cols-12 bg-gray-200 py-10 my-10 mx-40">
            <div className="col-span-4 flex justify-center items-center px-6 py-6"><img src={fac5} alt="faculty" className=" rounded-full w-4/6"/></div>
            <div className="col-span-8 flex flex-col justify-center items-start px-6">
              <div className="text-3xl font-bold text-primary-color border-b-4 border-b-primary-color pb-4 w-full">Assistant Professor</div>
              <div className="text-primary-color text-lg mt-4">Name: Agha Wafa Abbas</div>
              <div className="text-primary-color text-lg mt-4">Qualification: Masters in Computer Science</div>
              <div className="text-primary-color text-lg mt-4">Areas of Interest: Digital Logic Design, Mobile Application Development, Compiler Construction</div>
              <div className="text-primary-color text-lg mt-4">Email: aghawafaabbas@usa.edu.pk</div>
              <div className="text-primary-color text-lg mt-4">About: Agha Wafa, an accomplished educator with a distinguished background from Oxford University, excels in the field of networking. Renowned for his expertise and innovative teaching methods, he has a remarkable ability to simplify complex concepts and foster a deep understanding in his students. With a commitment to excellence and a passion for technology, Agha Wafa is dedicated to empowering learners to achieve their full potential in the ever-evolving landscape of networking. Join his courses to gain cutting-edge knowledge and skills from one of the best in the industry.</div>

            </div>
        </div>
    )
}

export default FacultyPopup;