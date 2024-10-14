import React from 'react';
import Admission from './admission';
import Scholarship from './scholarship';
import Rotate from './rotate';
import Testimonial from './testimonial';
import FacultyHomepage from './faculty.hp';
import ProgramsHomepage from './programs.hp';
import FollowUs from "../../components/common/follow";
import OverlayPage from './welcome';

const HomePage = () => {
    return (
        <div className='mb-40'>
            <OverlayPage />
            <ProgramsHomepage />
            <FacultyHomepage />
            <Admission />
            <Scholarship />
            <Rotate />
            <Testimonial />
            <FollowUs />
        </div>
    )
}

export default HomePage;