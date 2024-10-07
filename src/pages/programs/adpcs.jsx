import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllADPCS } from "../../redux/actions/adpcs.action";
import { useNavigate, useParams } from 'react-router-dom';

const ADPCS = () => {
    useParams();
    const dispatch = useDispatch();
    const [roadmap, setRoadmap] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(fetchAllADPCS());
                if (response.type === 'adpcs/fetchAll/fulfilled') {
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
        navigate(`/roadmap/adpcs/${termYear}`);
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
                    <div className="text-2xl font-semibold text-primary-color border-b-4 border-primary-color pb-2 mr-40 ml-2">Associate Degree in Computer Science</div>
                </div>
                <div className="col-span-8 text-xl text-primary-color leading-9 pl-3">Associate of Computer Science program aims to develop students’ critical professional thinking and intuition. The program’s curriculum provides a balanced mixture of learning experiences to make the graduates capable of sound professional decisions. Associate of Computer Science program objectives are in sync with not only the Department’s mission statement but also the University of South Asia’s mission statement.</div>
            </div>

            {/* Eligibility */}
            <div className="grid grid-cols-12 py-5">
                <div className="col-span-4">
                    <div className="text-2xl font-semibold text-primary-color border-b-4 border-primary-color pb-2 mr-40 ml-2">Eligibility</div>
                </div>
                <div className="col-span-8 pl-3">
                    <div className="text-xl text-primary-color leading-9">Minimum 50% Marks in Intermediate(FSC Pre Medical/Pre Engineering/ICS/DAE ) A-Level or equivalent</div>
                    <div className="text-xl text-primary-color leading-9 font-bold">Note: No 3rd division in Matriculation</div>
                    <div className="text-xl text-primary-color leading-9">Minimum 50% marks in admission Test</div>
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

export default ADPCS;
