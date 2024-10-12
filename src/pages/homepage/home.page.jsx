import React from 'react';
import Admission from './admission';
import Scholarship from './scholarship';
import Rotate from './rotate';

const HomePage = () => {
    return (
        <div className='mb-40'>
            <Admission />
            <Scholarship />
            <Rotate />
        </div>
    )
}

export default HomePage;