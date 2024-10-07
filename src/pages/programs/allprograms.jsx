import React, { useState } from "react";
import BSCS from "./bscs";
import BSSE from "./bsse";
import MSCS from "./mscs";

const AllPrograms = () => {
    const [selectedProgram, setSelectedProgram] = useState("bscs");

    const handleProgramClick = (program) => {
        setSelectedProgram(program);
    };

    const renderProgramContent = () => {
        switch (selectedProgram) {
            case "bscs":
                return <BSCS />;
            case "softwareEngineering":
                return <BSSE />;
            case "associateCS":
                return <div>Associate Degree in Computer Science Content</div>;
            case "mastersCS":
                return <MSCS />;
            case "phdCS":
                return <div>PHD in Computer Science Content</div>;
            default:
                return <div>Please select a program to see details.</div>;
        }
    };

    return (
        <div className="my-5 px-10">
            <div className="flex justify-center">
                <button
                    onClick={() => handleProgramClick("bscs")}
                    className={`text-xl text-white px-5 py-4 mx-4 transition duration-300 ease-in-out ${
                        selectedProgram === "bscs" ? "bg-red-600" : "bg-primary-color hover:bg-red-600"
                    }`}
                >
                    Bachelors in Computer Science
                </button>
                <button
                    onClick={() => handleProgramClick("softwareEngineering")} // Corrected to "softwareEngineering"
                    className={`text-xl text-white px-5 py-4 mx-4 transition duration-300 ease-in-out ${
                        selectedProgram === "softwareEngineering" ? "bg-red-600" : "bg-primary-color hover:bg-red-600" // Corrected condition
                    }`}
                >
                    Bachelors in Software Engineering
                </button>
                <button
                    onClick={() => handleProgramClick("associateCS")}
                    className={`text-xl text-white px-5 py-4 mx-4 transition duration-300 ease-in-out ${
                        selectedProgram === "associateCS" ? "bg-red-600" : "bg-primary-color hover:bg-red-600"
                    }`}
                >
                    Associate Degree in Computer Science
                </button>
                <button
                    onClick={() => handleProgramClick("mastersCS")}
                    className={`text-xl text-white px-5 py-4 mx-4 transition duration-300 ease-in-out ${
                        selectedProgram === "mastersCS" ? "bg-red-600" : "bg-primary-color hover:bg-red-600"
                    }`}
                >
                    Masters in Computer Science
                </button>
                <button
                    onClick={() => handleProgramClick("phdCS")}
                    className={`text-xl text-white px-5 py-4 mx-4 transition duration-300 ease-in-out ${
                        selectedProgram === "phdCS" ? "bg-red-600" : "bg-primary-color hover:bg-red-600"
                    }`}
                >
                    PHD in Computer Science
                </button>
            </div>

            {/* Render the selected program content */}
            <div className="mt-10">
                {renderProgramContent()}
            </div>
        </div>
    );
};

export default AllPrograms;
