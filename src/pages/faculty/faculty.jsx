import React from 'react';
import FacultyBanner from "./banner";
import FacultyDean from './dean';
import FacultyTeacher from './teacher';
import FacultyPopup from './popup';
import FacultyIntro from './intro';

const Faculty = () => {
    return(
        <div className="mb-40">
            <FacultyBanner/>
            <FacultyIntro />
            <FacultyDean/>
            <FacultyTeacher/>
            <FacultyPopup/>
        </div>
    )
}

export default Faculty;