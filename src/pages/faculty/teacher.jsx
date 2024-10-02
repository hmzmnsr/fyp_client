import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFaculty } from "../../redux/actions/faculty.action";

const FacultyTeacher = () => {
    const dispatch = useDispatch();
    const { faculties, loading, error } = useSelector((state) => state.faculty);

    useEffect(() => {
        dispatch(fetchFaculty());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching faculty members: {error}</div>;
    }

    return (
        <div className="my-20 mx-40 py-10 px-4">
            <div className="text-primary-color text-4xl border-b-4 border-b-primary-color leading-8 font-bold pb-4 mb-6">
                Faculty Members
            </div>
            <div className="text-primary-color text-2xl font-semibold leading-8 my-8">
                The faculty at the University of South Asia comprises people who are among the best teachers and researchers in their fields. This world-class faculty is instrumental in fostering academic, research, and innovation strengths in students.
            </div>

            <div className="grid grid-cols-4 gap-8 py-5">
                {faculties?.map((faculty) => (
                    <div
                        key={faculty._id}
                        className="flex justify-center items-center flex-col py-10 px-10 mt-5 bg-gray-200 shadow-lg transition-transform transform hover:shadow-2xl hover:-translate-y-2"
                    >
                        <img
                            src={faculty.image ? `http://localhost:8001/uploads/${faculty.image.split('/').pop()}` : 'defaultImagePath'}
                            alt={faculty.name}
                            className="w-4/6 h-56 object-cover rounded-full mb-6"
                        />
                        <div className="text-primary-color text-2xl font-semibold">Name: {faculty.name}</div>
                        <div className="text-primary-color text-xl font-semibold mt-1 mb-6">Position: {faculty.position}</div>
                        <button className="py-3 px-8 bg-primary-color text-white rounded-full hover:bg-red-600 duration-300 ease-in-out">
                            View Profile
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacultyTeacher;
