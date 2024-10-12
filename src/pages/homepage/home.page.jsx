import React from 'react';
import Admission from './admission';
import Scholarship from './scholarship';

const HomePage = () => {
    return (
        <div className='mb-40'>
            <Admission />
            <Scholarship />
        </div>
    )
}

export default HomePage;