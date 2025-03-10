import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./allprograms.css";
import BSCS from "./bscs";
import BSSE from "./bsse";
import MSCS from "./mscs";
import ADPCS from "./adpcs";
import PHDCS from "./phdcs";

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
                return <ADPCS />;
            case "mastersCS":
                return <MSCS />;
            case "phdCS":
                return <PHDCS />;
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
                    onClick={() => handleProgramClick("softwareEngineering")}
                    className={`text-xl text-white px-5 py-4 mx-4 transition duration-300 ease-in-out ${
                        selectedProgram === "softwareEngineering" ? "bg-red-600" : "bg-primary-color hover:bg-red-600"
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

            {/* Render the selected program content with transition */}
            <div className="mt-10">
                <TransitionGroup>
                    <CSSTransition
                        key={selectedProgram}
                        timeout={500}
                        classNames="fade"
                    >
                        <div>{renderProgramContent()}</div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    );
};

export default AllPrograms;
