import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllBSSE } from "../../redux/actions/bsse.action";

const BSSERoadmap = () => {
    const { termYear } = useParams();
    const dispatch = useDispatch();
    const [roadmap, setRoadmap] = useState({});
    const [error, setError] = useState(null);

    const capitalizeWords = (str) => {
        return str
            .toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    useEffect(() => {
        const fetchRoadmap = async () => {
            try {
                const response = await dispatch(fetchAllBSSE());
                if (response.type === 'bsse/fetchAll/fulfilled') {
                    // Filter data based on the selected term-year
                    const filteredEntries = response.payload.filter(
                        entry => `${entry.term} ${entry.year}` === termYear
                    );

                    // Group courses by semester
                    const groupedCourses = filteredEntries.reduce((acc, entry) => {
                        entry.courses.forEach(course => {
                            const semester = entry.semester; // Get the semester from the entry
                            if (!acc[semester]) {
                                acc[semester] = []; // Initialize as array if it doesn't exist
                            }
                            acc[semester].push(course); // Push the course into the corresponding semester
                        });
                        return acc;
                    }, {});

                    setRoadmap(groupedCourses); // Set grouped courses
                } else {
                    setError("Failed to load roadmap data.");
                }
            } catch (error) {
                setError("Error fetching roadmap data.");
            }
        };

        fetchRoadmap();
    }, [dispatch, termYear]);

    return (
        <div className="mx-20 my-10 px-10 mb-40">
            <div className="text-primary-color text-4xl font-bold text-center mb-16">Roadmap - Department of Computer Science, University of South Asia</div>

            <div className="px-2">
                <h2 className="text-2xl font-semibold text-primary-color mb-5">
                    {capitalizeWords(termYear)} Roadmap
                </h2>

                {error && <div className="text-red-500">{error}</div>}

                {Object.keys(roadmap).length > 0 ? (
                    Object.keys(roadmap).map((semester) => (
                        <div key={semester} className="my-5">
                            <h4 className="text-xl font-semibold mb-4">
                                Semester {semester}
                            </h4>
                            <table className="min-w-full table-fixed border-collapse text-center">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border px-4 py-2" style={{ width: '150px' }}>Course Code</th>
                                        <th className="border px-4 py-2" style={{ width: '250px' }}>Subject Name</th>
                                        <th className="border px-4 py-2" style={{ width: '150px' }}>Credit Hours</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(roadmap[semester]) && roadmap[semester].map((course, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2" style={{ width: '150px' }}>{course.courseCode}</td>
                                            <td className="border px-4 py-2" style={{ width: '250px' }}>{course.subjectName}</td>
                                            <td className="border px-4 py-2" style={{ width: '150px' }}>{course.creditHours}</td>
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
        </div>
    );
};

export default BSSERoadmap;
