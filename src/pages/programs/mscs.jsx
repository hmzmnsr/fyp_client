import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllMSCS } from "../../redux/actions/mscs.action";
import { useNavigate, useParams } from 'react-router-dom';

const MSCS = () => {
    useParams();
    const dispatch = useDispatch();
    const [roadmap, setRoadmap] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(fetchAllMSCS());
                if (response.type === 'mscs/fetchAll/fulfilled') {
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
        navigate(`/roadmap/mscs/${termYear}`);
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
        <div className="my-5 mx-8 px-2">
            {/* Program Info */}
            <div className="grid grid-cols-12 py-5">
                <div className="col-span-4">
                    <div className="text-2xl font-semibold text-primary-color border-b-4 border-primary-color pb-2 mr-40 ml-2">Masters in Computer Science</div>
                </div>
                <div className="col-span-8 text-xl text-primary-color leading-9 pl-3">The Master of Science in Computer Science (MSCS) program at the University of South Asia equips students with advanced knowledge and skills in computer science, fostering critical thinking and professional intuition essential for leadership roles in the field. The program curriculum is meticulously designed to offer a blend of theoretical insights and practical experiences, enabling graduates to make informed and impactful decisions in their professional careers. The MSCS program aligns closely with both the departmental and university mission statements, emphasizing innovation, interdisciplinary collaboration, and ethical responsibility.</div>
            </div>

            {/* Eligibility */}
            <div className="grid grid-cols-12 py-5">
                <div className="col-span-4">
                    <div className="text-2xl font-semibold text-primary-color border-b-4 border-primary-color pb-2 mr-40 ml-2">Eligibility</div>
                </div>
                <div className="col-span-8 pl-3">
                    <div className="text-xl text-primary-color leading-9">BS (IT/CS/SE) 4 years degree program (minimum 130 Cr. Hrs. with minimum 2.0 CGPA on scale 4.0 or least 60% marks (Annual System)</div>
                    <div className="text-xl text-primary-color leading-9 font-bold">OR</div>
                    <div className="text-xl text-primary-color leading-9">Computer Science conversion course two years degree program referred to as MCS or M.Sc. (CS) or M. Sc (IT), (minimum 2.0 CGPA of scale 4.0 or equivalent, or least 60% marks (Annual System)</div>
                    <div className="text-xl text-primary-color leading-9 font-bold">OR</div>
                    <div className="text-xl text-primary-color leading-9">16-years education engineering degree in computing. Under eligibility criterion 4, candidates will be required to complete the deficiency coursework prior to the MSCS coursework to ensure the pre-requisite competency in CS. The deficiency/transition coursework will be determined on the basis of the core CS courses of the BSCS degree.</div>
                    <div className="text-xl text-primary-color leading-9 font-bold">GAT or University admission test with 50% marks.</div>
                </div>
            </div>

            {/* Fees Structure */}
            <div className="grid grid-cols-12 py-5">
                <div className="col-span-4">
                    <div className="text-2xl font-semibold text-primary-color border-b-4 border-primary-color pb-2 mr-40 ml-2">Fees Structure</div>
                </div>
                <div className="col-span-8 pl-3">
                    <div className="text-xl text-primary-color">Per Semester Fees: RS. 180,000</div>
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

export default MSCS;
