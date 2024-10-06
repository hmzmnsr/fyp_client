import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllBSCS } from "../../redux/actions/bscs.action";
import { useNavigate } from 'react-router-dom';

const BSCS = () => {
    const dispatch = useDispatch();
    const [roadmap, setRoadmap] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(fetchAllBSCS());
                if (response.type === 'bscs/fetchAll/fulfilled') {
                    const roadmapData = response.payload.reduce((acc, entry) => {
                        const key = `${entry.term} ${entry.year}`;
                        if (!acc[key]) acc[key] = entry._id;
                        return acc;
                    }, {});
                    setRoadmap(roadmapData);
                } else {
                    setError("Failed to load roadmap data.");
                }
            } catch (error) {
                setError("Error fetching roadmap data.");
            }
        };

        fetchData();
    }, [dispatch]);

    const handleRoadmapClick = (termYear) => {
        navigate(`/roadmap/${termYear}`);
    };

    const renderButtons = () => {
        const termYears = Object.keys(roadmap);
        
        return termYears.length === 0 ? (
            <div>No roadmap data available.</div>
        ) : (
            termYears.map((termYear) => (
                <button
                    key={termYear}
                    className="bg-primary-color mx-3 text-white py-2 px-10 hover:bg-red-600 duration-300 ease-in-out"
                    onClick={() => handleRoadmapClick(termYear)}
                >
                    {termYear.charAt(0).toUpperCase() + termYear.slice(1)}
                </button>
            ))
        );
    };

    return (
        <div className="my-5 mx-20 px-2">
            {/* Program Info */}
            <div className="grid grid-cols-12 py-5">
                <div className="col-span-4">
                    <div className="text-2xl font-semibold text-primary-color border-b-4 border-primary-color pb-2 mr-40 ml-2">Bachelors in Computer Science</div>
                </div>
                <div className="col-span-8 text-xl text-primary-color leading-9 pl-3">
                    University of South Asia has been offering Bachelor of Science (BS) program in Computer Science since 2005. 
                    The prime focus of the program is to equip the students in the field of Computer Science so that they could grasp the in-built technicalities and complexities of computer and its related contemporary issues.
                    The curriculum is based on the recommendations of the National Curriculum Revision Committees approved by the Higher Education Commission (HEC), Islamabad. 
                    However, the University may update the curricula from time to time with the approval of designated bodies. 
                    During the final year, students will be required to spend a good deal of time in completing a project. This project will usually be done in collaboration with industry, under the guidance of the professionals nominated by the University.
                </div>
            </div>

            {/* Eligibility */}
            <div className="grid grid-cols-12 py-5">
                <div className="col-span-4">
                    <div className="text-2xl font-semibold text-primary-color border-b-4 border-primary-color pb-2 mr-40 ml-2">Eligibility</div>
                </div>
                <div className="col-span-8 pl-3">
                    <div className="text-xl text-primary-color leading-9">Intermediate or equivalent with 50% marks. USA admission test or equivalent.</div>
                    <div className="text-xl text-primary-color leading-9 font-bold">Note: Students awaiting Inter part II results shall apply on the basis of Inter part I</div>
                </div>
            </div>

            {/* Fees Structure */}
            <div className="grid grid-cols-12 py-5">
                <div className="col-span-4">
                    <div className="text-2xl font-semibold text-primary-color border-b-4 border-primary-color pb-2 mr-40 ml-2">Fees Structure</div>
                </div>
                <div className="col-span-8 pl-3">
                    <div className="text-xl text-primary-color">Application and Registration Fees: RS. 30,000</div>
                    <div className="text-xl text-primary-color">Per Semester Fees: RS. 180,000</div>
                </div>
            </div>

            {/* Degree Completion Requirement */}
            <div className="grid grid-cols-12 py-5">
                <div className="col-span-4">
                    <div className="text-2xl font-semibold text-primary-color border-b-4 border-primary-color pb-2 mr-40 ml-2">Degree Completion Requirement</div>
                </div>
                <div className="col-span-8 text-xl text-primary-color pl-3">
                    Successful completion of 130 Credit hours (136 for students belonging to Pre-Medical Group) including project with a minimum CGPA of 2.00.
                </div>
            </div>

            {/* Roadmap */}
            <div className="grid grid-cols-12 py-5">
                <div className="col-span-4">
                    <div className="text-2xl font-semibold text-primary-color border-b-4 border-primary-color pb-2 mr-40 ml-2">Roadmap</div>
                </div>
                <div className="col-span-8 pt-2">
                    {renderButtons()}
                </div>
            </div>

            {error && <div className="text-red-500 text-center">{error}</div>}
        </div>
    );
};

export default BSCS;
