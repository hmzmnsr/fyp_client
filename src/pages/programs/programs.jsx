import React from 'react';
import ProgramsBanner from './banner';
import ProgramInfo from './programinfo';
import AllPrograms from './allprograms';
import BSCS from "./bscs";

const Programs = () => {
    return(
        <div className="mb-40">
            <ProgramsBanner/>
            <ProgramInfo />
            <AllPrograms />
            <BSCS/>
        </div>
    )
}

export default Programs;