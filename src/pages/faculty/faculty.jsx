import React from 'react';
import FacultyBanner from "./banner";
import FacultyDean from './dean';
import FacultyTeacher from './teacher';

const Faculty = () => {
    return(
        <div>
            <FacultyBanner/>
            <FacultyDean/>
            <FacultyTeacher/>
        </div>
    )
}

export default Faculty;