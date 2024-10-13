import React from 'react';
import Admission from './admission';
import Scholarship from './scholarship';
import Rotate from './rotate';
import Testimonial from './testimonial';
import FacultyHomepage from './faculty.hp';

const HomePage = () => {
    return (
        <div className='mb-40'>
            <FacultyHomepage />
            <Admission />
            <Scholarship />
            <Rotate />
            <Testimonial />
        </div>
    )
}

export default HomePage;