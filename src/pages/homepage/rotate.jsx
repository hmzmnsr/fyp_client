import React from "react";
import { PiStudent } from "react-icons/pi";
import { MdOutlineGroup } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import CountUp from "react-countup";

const Rotate = () => {
    return (
        <div className="mx-20 my-10 py-10 bg-gray-200">
            <div className="grid grid-cols-12">


                {/* Graduate Students */}
                <div className="col-span-3 flex flex-col justify-center items-center border-r-2 border-primary-color">
                    <div className="text-9xl text-primary-color mb-4"><PiStudent /></div>
                    <div className="text-5xl text-primary-color my-3 mx-5 font-bold">
                        <CountUp end={4000} duration={2.5} />
                        +
                    </div>
                    <div className="text-2xl text-primary-color mx-5 text-center font-bold">GRADUATE STUDENTS</div>
                </div>


                {/* Undergraduate Students */}
                <div className="col-span-3 flex flex-col justify-center items-center border-r-2 border-primary-color">
                    <div className="text-9xl text-primary-color mb-4"><MdOutlineGroup /></div>
                    <div className="text-5xl text-primary-color my-3 mx-5 font-bold">
                        <CountUp end={8600} duration={2.5} />
                        +
                    </div>
                    <div className="text-2xl text-primary-color mx-5 text-center font-bold">UNDERGRADUATE STUDENTS</div>
                </div>


                {/* Publications */}
                <div className="col-span-3 flex flex-col justify-center items-center border-r-2 border-primary-color">
                    <div className="text-9xl text-primary-color mb-4"><IoNewspaperOutline /></div>
                    <div className="text-5xl text-primary-color my-3 mx-5 font-bold">
                        <CountUp end={400} duration={2.5} />
                        +
                    </div>
                    <div className="text-2xl text-primary-color mx-5 text-center font-bold">PUBLICATIONS</div>
                </div>


                {/* Faculty Strength */}
                <div className="col-span-3 flex flex-col justify-center items-center">
                    <div className="text-9xl text-primary-color mb-4"><GiTeacher /></div>
                    <div className="text-5xl text-primary-color my-3 mx-5 font-bold">
                        <CountUp end={30} duration={2.5} />
                        +
                    </div>
                    <div className="text-2xl text-primary-color mx-5 text-center font-bold">FACULTY STRENGTH</div>
                </div>


            </div>
        </div>
    );
};

export default Rotate;
