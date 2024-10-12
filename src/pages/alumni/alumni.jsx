import React from 'react';
import AlumniBanner from './banner';
import AlumniWelcome from "./welcome";
import AlumniVision from "./vision";
import AlumniSlider from './checkpoint';
import AlumniConvocation from './convocation';
import FollowUs from "../../components/common/follow";


const Alumni = () => {
  

    return (
        <div className="mb-40">
            <AlumniBanner />
            <AlumniWelcome />
            <AlumniVision />
            <AlumniSlider />
            <AlumniConvocation />
            <FollowUs />
        </div>
    );
};

export default Alumni;
