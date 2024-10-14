import React from "react";

const Admission = () => {
    return (
        <div 
            className="mx-20 my-10 px-10 py-10 transition-transform duration-300 ease-in-out hover:transform hover:scale-105 text-justify"
        >
            <div className="text-4xl flex justify-center items-center font-bold">Admission Procedure</div>
            <div className="text-3xl flex justify-center items-center font-bold my-4">Are you ready to take the next step toward your future?</div>
            
            {/* Step 1 */}
            <div className="grid grid-cols-12 mt-10">
                <div className="col-span-4 flex justify-center items-center">
                    <div className="flex justify-center items-center bg-primary-color my-5 text-center w-3/6 py-10 shadow-2xl shadow-primary-color transition-transform duration-300 ease-in-out hover:transform hover:scale-105">
                        <div className="text-xl text-white mr-3 font-bold">Step 1:</div>
                        <div className="text-xl text-white font-bold">You Apply</div>
                    </div>
                </div>
                <div className="col-span-8 flex justify-center items-center">
                    <div className="text-primary-color text-xl pr-32 leading-9 font-semibold">Tell us a little about yourself and we will help you with the rest. Our convenient online application form takes only few minutes to complete.</div>
                </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-12">
                <div className="col-span-4 flex justify-center items-center">
                    <div className="flex justify-center items-center bg-primary-color my-5 text-center w-3/6 py-10 shadow-2xl shadow-primary-color transition-transform duration-300 ease-in-out hover:transform hover:scale-105">
                        <div className="text-xl text-white mr-3 font-bold">Step 2:</div>
                        <div className="text-xl text-white font-bold">We Connect</div>
                    </div>
                </div>
                <div className="col-span-8 flex justify-center items-center">
                    <div className="text-primary-color text-xl pr-32 leading-9 font-semibold">After you submit your application, an admissions representative will reach out to you and help with the rest of the procedure.</div>
                </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-12 mb-10">
                <div className="col-span-4 flex justify-center items-center">
                    <div className="flex justify-center items-center bg-primary-color my-5 text-center w-3/6 py-10 shadow-2xl shadow-primary-color transition-transform duration-300 ease-in-out hover:transform hover:scale-105">
                        <div className="text-xl text-white mr-3 font-bold">Step 3:</div>
                        <div className="text-xl text-white font-bold">Get Ready</div>
                    </div>
                </div>
                <div className="col-span-8 flex justify-center items-center">
                    <div className="text-primary-color text-xl pr-32 leading-9 font-semibold">Once your application has been submitted and you've been contacted by one of our admissions representatives, you'll be ready to join the campus.</div>
                </div>
            </div>

            {/* Get Started Button */}
            <div className="flex justify-center items-center">
                <a href="https://usa.edu.pk/apply-now/" target="_blank" rel="noopener noreferrer">
                    <button className="px-16 py-5 bg-primary-color text-white rounded-full hover:bg-red-700 transition-transform duration-300 ease-in-out text-lg shadow-2xl shadow-primary-color hover:scale-105">
                        Get Started
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Admission;
