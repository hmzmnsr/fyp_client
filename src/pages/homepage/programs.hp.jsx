import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bsit from "../../assets/programshp/bsit.webp";
import masters from "../../assets/programshp/masters.webp";
import bscs from "../../assets/programshp/bscs.png";
import mscs1 from "../../assets/programshp/mscs1.jpg";
import phd from "../../assets/programshp/phd.jpg";

const ProgramsHomepage = () => {
    const navigate = useNavigate();
    const [selectedProgram, setSelectedProgram] = useState("ADPCS");
    const [fade, setFade] = useState(true);

    const programs = ["ADPCS", "BSCS", "BSSE", "MSCS", "PhDCS"];

    const handleViewPrograms = () => {
        navigate('/programs');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setSelectedProgram(prev => {
                    const currentIndex = programs.indexOf(prev);
                    const nextIndex = (currentIndex + 1) % programs.length;
                    return programs[nextIndex];
                });
                setFade(true);
            }, 300);
        }, 8000);

        return () => clearInterval(interval);
    });

    const renderProgramDetails = () => {
        const fadeClass = fade ? "opacity-100" : "opacity-0";

        switch (selectedProgram) {
            case "BSCS":
                return (
                    <div
                        className={`relative grid grid-cols-12 bg-cover bg-center bg-no-repeat py-40 px-20 transition-opacity duration-500 ${fadeClass}`}
                        style={{ backgroundImage: `url(${bscs})` }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                        <div className="relative col-span-5 z-10 text-8xl text-white leading-none ml-10">
                            <span className="block my-2">Bachelors</span>
                            <span className="block my-2">in</span>
                            <span className="block my-2">Computer</span>
                            <span className="block my-2">Science</span>
                        </div>
                        <div className="relative col-span-7 z-10 flex flex-col justify-center items-center">
                            <div className="text-2xl text-white p-4 rounded leading-10">
                            The BSCS program is designed to equip students with a solid foundation in computer science, covering essential areas such as programming, algorithms, data structures, and software engineering. With a focus on practical application and emerging technologies, students will be prepared for careers in software development, data science, and beyond.
                            </div>
                            <button className="py-4 px-10 text-primary-color bg-gray-200 mt-8 hover:bg-red-700 hover:text-white transition duration-300 rounded-full" onClick={handleViewPrograms}>
                                View Program
                            </button>
                        </div>
                    </div>
                );
            case "BSSE":
                return (
                    <div
                        className={`relative grid grid-cols-12 bg-cover bg-center bg-no-repeat py-40 px-20 transition-opacity duration-500 ${fadeClass}`}
                        style={{ backgroundImage: `url(${masters})` }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                        <div className="relative col-span-5 z-10 text-8xl text-white leading-none ml-10">
                            <span className="block my-2">Bachelors</span>
                            <span className="block my-2">in</span>
                            <span className="block my-2">Software</span>
                            <span className="block my-2">Engineering</span>
                        </div>
                        <div className="relative col-span-7 z-10 flex flex-col justify-center items-center">
                            <div className="text-2xl text-white p-4 rounded leading-10">
                            The BSSE program focuses on the engineering principles required to design, develop, and maintain software systems. Students will gain hands-on experience in software design, project management, and system architecture, enabling them to build efficient and reliable software solutions for real-world problems.
                            </div>
                            <button className="py-4 px-10 text-primary-color bg-gray-200 mt-8 hover:bg-red-700 hover:text-white transition duration-300 rounded-full" onClick={handleViewPrograms}>
                                View Program
                            </button>
                        </div>
                    </div>
                );
            case "ADPCS":
                return (
                    <div
                        className={`relative grid grid-cols-12 bg-cover bg-center bg-no-repeat py-28 px-20 transition-opacity duration-500 ${fadeClass}`}
                        style={{ backgroundImage: `url(${bsit})` }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                        <div className="relative col-span-5 z-10 text-8xl text-white leading-none ml-10">
                            <span className="block my-2">Associate</span>
                            <span className="block my-2">Degree</span>
                            <span className="block my-2">in</span>
                            <span className="block my-2">Computer</span>
                            <span className="block my-2">Science</span>
                        </div>
                        <div className="relative col-span-7 z-10 flex flex-col justify-center items-center">
                            <div className="text-2xl text-white p-4 rounded leading-10">
                            The ADPCS provides a quick pathway into the tech industry, offering foundational knowledge in computer science and IT skills. This program is ideal for students seeking to jumpstart their careers with a two-year degree, covering essential topics in programming, databases, and networking. In addition to technical skills, students will learn about system analysis and project management, equipping them to effectively tackle real-world challenges.
                            </div>
                            <button className="py-4 px-10 text-primary-color bg-gray-200 mt-8 hover:bg-red-700 hover:text-white transition duration-300 rounded-full" onClick={handleViewPrograms}>
                                View Program
                            </button>
                        </div>
                    </div>
                );
            case "MSCS":
                return (
                    <div
                        className={`relative grid grid-cols-12 bg-cover bg-center bg-no-repeat py-40 px-20 transition-opacity duration-500 ${fadeClass}`}
                        style={{ backgroundImage: `url(${mscs1})` }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                        <div className="relative col-span-5 z-10 text-8xl text-white leading-none ml-10">
                            <span className="block my-2">Masters</span>
                            <span className="block my-2">in</span>
                            <span className="block my-2">Computer</span>
                            <span className="block my-2">Science</span>
                        </div>
                        <div className="relative col-span-7 z-10 flex flex-col justify-center items-center">
                            <div className="text-2xl text-white p-4 rounded leading-10">
                            The MSCS program offers advanced education in computer science, allowing students to specialize in areas such as artificial intelligence, cybersecurity, and big data. This research-oriented program prepares graduates for leadership roles in technology and innovation or for further academic pursuits like a PhD.
                            </div>
                            <button className="py-4 px-10 text-primary-color bg-gray-200 mt-8 hover:bg-red-700 hover:text-white transition duration-300 rounded-full" onClick={handleViewPrograms}>
                                View Program
                            </button>
                        </div>
                    </div>
                );
            case "PhDCS":
                return (
                    <div
                        className={`relative grid grid-cols-12 bg-cover bg-center bg-no-repeat py-40 px-20 transition-opacity duration-500 ${fadeClass}`}
                        style={{ backgroundImage: `url(${phd})` }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                        <div className="relative col-span-5 z-10 text-8xl text-white leading-none ml-10">
                            <span className="block my-2">PhD</span>
                            <span className="block my-2">in</span>
                            <span className="block my-2">Computer</span>
                            <span className="block my-2">Science</span>
                        </div>
                        <div className="relative col-span-7 z-10 flex flex-col justify-center items-center">
                            <div className="text-2xl text-white p-4 rounded leading-10">
                            The PhDCS program is designed for those who wish to contribute to cutting-edge research in computer science. Students engage in deep exploration of advanced topics such as machine learning, cryptography, and distributed systems, preparing them to become thought leaders and innovators in academia and industry.
                            </div>
                            <button className="py-4 px-10 text-primary-color bg-gray-200 mt-8 hover:bg-red-700 hover:text-white transition duration-300 rounded-full" onClick={handleViewPrograms}>
                                View Program
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="mx-20 my-10 px-10 py-10">
            <div className="text-5xl text-primary-color font-bold text-center mb-10">Programs Offered - University of South Asia</div>
            <div className="flex justify-evenly">
                <div className="mr-10 my-10 bg-gray-200 cursor-pointer" onClick={() => setSelectedProgram("ADPCS")}>
                    <div className={`text-2xl text-primary-color py-10 px-5 text-center ${selectedProgram === "ADPCS" ? "bg-red-800 text-white" : ""}`}>Associate Degree Program in Computer Science (ADPCS)</div>
                </div>
                <div className="mr-10 my-10 bg-gray-200 cursor-pointer" onClick={() => setSelectedProgram("BSCS")}>
                    <div className={`text-2xl text-primary-color py-10 px-5 text-center ${selectedProgram === "BSCS" ? "bg-red-800 text-white" : ""}`}>Bachelor of Science in Computer Science (BSCS)</div>
                </div>
                <div className="mr-10 my-10 bg-gray-200 cursor-pointer" onClick={() => setSelectedProgram("BSSE")}>
                    <div className={`text-2xl text-primary-color py-10 px-5 text-center ${selectedProgram === "BSSE" ? "bg-red-800 text-white" : ""}`}>Bachelor of Science in Software Engineering (BSSE)</div>
                </div>
                <div className="mr-10 my-10 bg-gray-200 cursor-pointer" onClick={() => setSelectedProgram("MSCS")}>
                    <div className={`text-2xl text-primary-color py-10 px-5 text-center ${selectedProgram === "MSCS" ? "bg-red-800 text-white" : ""}`}>Master of Science in Computer Science (MSCS)</div>
                </div>
                <div className="mr-10 my-10 bg-gray-200 cursor-pointer" onClick={() => setSelectedProgram("PhDCS")}>
                    <div className={`text-2xl text-primary-color py-10 px-5 text-center ${selectedProgram === "PhDCS" ? "bg-red-800 text-white" : ""}`}>Doctor of Philosophy in Computer Science (PhDCS)</div>
                </div>
            </div>

            {renderProgramDetails()}
        </div>
    );
};

export default ProgramsHomepage;
