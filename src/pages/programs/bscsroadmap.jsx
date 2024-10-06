import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllBSCS } from "../../redux/actions/bscs.action";

const BSCSRoadmap = () => {
    const { termYear } = useParams();
    const dispatch = useDispatch();
    const [roadmap, setRoadmap] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRoadmap = async () => {
            try {
                const response = await dispatch(fetchAllBSCS());
                if (response.type === 'bscs/fetchAll/fulfilled') {
                    console.log("Fetched roadmap data:", response.payload);

                    const filteredEntries = response.payload.filter(
                        entry => `${entry.term} ${entry.year}` === termYear
                    );

                    const groupedCourses = filteredEntries.reduce((acc, entry) => {
                        entry.courses.forEach(course => {
                            const semester = entry.semester;
                            if (!acc[semester]) {
                                acc[semester] = [];
                            }
                            acc[semester].push(course);
                        });
                        return acc;
                    }, {});

                    console.log("Grouped Courses:", groupedCourses);

                    setRoadmap(groupedCourses);
                } else {
                    setError("Failed to load roadmap data.");
                }
            } catch (error) {
                setError("Error fetching roadmap data.");
            }
        };

        fetchRoadmap();
    }, [dispatch, termYear]);

    console.log("Roadmap state:", roadmap);

    return (
        <div className="my-5 mx-20 px-2">
            <h2 className="text-2xl font-semibold text-primary-color mb-5">
                {termYear} Roadmap
            </h2>

            {error && <div className="text-red-500">{error}</div>}

            {Object.keys(roadmap).length > 0 ? (
                Object.keys(roadmap).map((semester) => (
                    <div key={semester} className="my-5">
                        <h4 className="text-xl font-semibold mb-4">
                            Semester {semester}
                        </h4>
                        <table className="min-w-full table-auto border-collapse text-center">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border px-4 py-2">Course Code</th>
                                    <th className="border px-4 py-2">Subject Name</th>
                                    <th className="border px-4 py-2">Credit Hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(roadmap[semester]) && roadmap[semester].map((course, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{course.courseCode}</td>
                                        <td className="border px-4 py-2">{course.subjectName}</td>
                                        <td className="border px-4 py-2">{course.creditHours}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))
            ) : (
                <div>No roadmap data available for {termYear}.</div>
            )}
        </div>
    );
};

export default BSCSRoadmap;
