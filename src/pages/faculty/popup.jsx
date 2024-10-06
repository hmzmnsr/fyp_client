import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FacultyProfile = () => {
    const location = useLocation();
    useNavigate();
    const { faculty } = location.state || {}; 

    if (!faculty) {
        return (
            <div></div>
        );
    }

    return (
        <div className="mb-40">
            <div className="mx-20 mt-10 px-24">
                <div className="text-primary-color text-4xl font-bold text-center my-20">Meet Our Faculty - Department of Computer Science, University of South Asia</div>
            </div>
            <div className="grid grid-cols-12 bg-gray-200 py-10 my-10 mx-40">
                <div className="col-span-4 flex justify-center items-center px-6 py-6">
                    <img
                        src={faculty.image ? `http://localhost:8001/uploads/${faculty.image}` : 'defaultImagePath'}
                        alt={faculty.name || 'faculty'}
                        className="rounded-full w-4/6"
                    />
                </div>
                <div className="col-span-8 flex flex-col justify-center items-start px-6">
                    <div className="text-3xl font-bold text-primary-color border-b-4 border-b-primary-color pb-4 w-full">
                        {faculty.position || "Position not available"}
                    </div>
                    <div className="text-primary-color text-lg mt-4">
                        Name: {faculty.name || "Name not available"}
                    </div>
                    <div className="text-primary-color text-lg mt-4">
                        Qualification: {faculty.qualification || "Qualification not available"}
                    </div>
                    <div className="text-primary-color text-lg mt-4">
                        Areas of Interest: {faculty.interests ? faculty.interests.join(', ') : "Not available"}
                    </div>
                    <div className="text-primary-color text-lg mt-4">
                        Email: {faculty.email || "Email not available"}
                    </div>
                    <div className="text-primary-color text-lg mt-4">
                        About: {faculty.about || "No additional information available"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyProfile;
