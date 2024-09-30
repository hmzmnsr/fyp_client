import React from "react";

const AlumniVision = () => {
    return (
        <div className="grid grid-cols-12 my-20 mx-20">
            <div className="col-span-2 border-l-2 border-l-primary-color pl-4 text-primary-color font-bold text-5xl py-5" style={{ lineHeight: '60px' }}>Empowering Success, Celebrating Achievements, Uniting for Excellence.</div>
            <div className="col-span-1"></div>
            <div className="col-span-3 bg-gray-200 py-10 px-10 mx-4">
                <div className="text-primary-color font-bold text-3xl">Mission</div>
                <div className="text-primary-color text-xl mt-2 leading-8">The University of South Asia fosters a dynamic global network of its graduates, keeping them informed about current events, empowering them with career advancement opportunities, and celebrating their achievements through engaging activities.</div>
            </div>
            <div className="col-span-3 bg-gray-200 py-10 px-10 mx-4">
                <div className="text-primary-color font-bold text-3xl">Vision</div>
                <div className="text-primary-color text-xl mt-2 leading-8">The University of South Asia cultivates a thriving alumni community that recognizes the dedication of its graduates. We celebrate their achievements, fostering a network that strengthens lifelong connections and empowers them with valuable career development opportunities.</div>
            </div>
            <div className="col-span-3 bg-gray-200 py-10 px-10 mx-4">
                <div className="text-primary-color font-bold text-3xl">Aim</div>
                <div className="text-primary-color text-xl mt-2 leading-8">Unleashing potential! USA empowers alumni to conquer challenges & achieve personal & professional excellence. Network & services fuel their lifelong journey, fostering a thriving, connected community where success is celebrated & contributions empower all to rise together.</div>
            </div>
        </div>
    );
};


export default AlumniVision;