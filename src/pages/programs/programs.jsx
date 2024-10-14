import React from 'react';
import ProgramsBanner from './banner';
import ProgramInfo from './programinfo';
import AllPrograms from './allprograms';

const Programs = () => {
    return(
        <div className="mb-40 text-justify">
            <ProgramsBanner/>
            <ProgramInfo />
            <AllPrograms />
        </div>
    )
}

export default Programs;