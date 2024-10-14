import React from "react";
import { useNavigate } from "react-router-dom";
import facultyhp from "../../assets/faculty/gallery3.jpg";

const FacultyHomepage = () => {
    const navigate = useNavigate();

    const handleViewFaculty = () => {
        navigate('/faculty');
    };

    return (
        <div className="mx-20 my-10 py-10 px-10">
            <div className="grid grid-cols-12">
                <div className="col-span-5">
                    <img src={facultyhp} className="object-cover shadow-2xl shadow-primary-color" alt="fac" />
                </div>
                <div className="col-span-7 px-20 py-10">
                    <div className="text-5xl text-primary-color font-bold">
                        Faculty of Computer Science - University of South Asia
                    </div>
                    <div className="text-xl mt-5 leading-9 text-primary-color text-justify">
                        At the University of South Asia, our Faculty of Computer Science is committed to shaping future technology leaders. With a blend of experienced faculty, cutting-edge research, and industry-aligned programs, we provide students with the knowledge and practical skills needed to excel in fields such as software engineering, artificial intelligence, data science, and cybersecurity. Our emphasis on innovation, critical thinking, and hands-on learning ensures that our graduates are well-prepared to tackle real-world challenges and lead in the ever-evolving tech landscape.
                    </div>
                    <div className="flex justify-center items-center mt-10 mr-20">
                        <button
                            className="bg-primary-color text-white px-12 py-4 hover:bg-red-700 transition duration-300 ease-in-out rounded-full shadow-2xl shadow-primary-color"
                            onClick={handleViewFaculty}
                        >
                            View Faculty
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyHomepage;
