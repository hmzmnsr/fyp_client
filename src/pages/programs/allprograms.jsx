import React from "react";

const AllPrograms = () => {
    return(
        <div className="grid grid-cols-12 my-5 px-10 ">
         <div className="col-span-12 flex flex-row justify-center">
            <button className="text-xl text-white px-5 py-4 bg-primary-color mx-4 hover:bg-red-600 transition duration-300 ease-in-out">Bachelors in Computer Science</button>
            <button className="text-xl text-white px-5 py-4 bg-primary-color mx-4 hover:bg-red-600 transition duration-300 ease-in-out">Bachelors in Software Engineering</button>
            <button className="text-xl text-white px-5 py-4 bg-primary-color mx-4 hover:bg-red-600 transition duration-300 ease-in-out">Associate Degree in Computer Science</button>
            <button className="text-xl text-white px-5 py-4 bg-primary-color mx-4 hover:bg-red-600 transition duration-300 ease-in-out">Masters in Computer Science</button>
            <button className="text-xl text-white px-5 py-4 bg-primary-color mx-4 hover:bg-red-600 transition duration-300 ease-in-out">PHD in Computer Science</button>
         </div>
        </div>
    )
}

export default AllPrograms;