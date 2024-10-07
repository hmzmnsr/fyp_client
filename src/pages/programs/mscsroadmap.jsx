import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllMSCS } from "../../redux/actions/mscs.action";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./mscsroadmap.css";

const MSCSRoadmap = () => {
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
                const response = await dispatch(fetchAllMSCS());
                if (response.type === 'mscs/fetchAll/fulfilled') {
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

    return (
        <div className="mx-20 my-10 px-10 mb-40">
            <div className="text-primary-color text-4xl font-bold text-center mb-16">
                Roadmap - Department of Computer Science, University of South Asia
            </div>

            <div className="px-2">
                <h2 className="text-2xl font-semibold text-primary-color mb-5">
                    {capitalizeWords(termYear)} Roadmap
                </h2>

                {error && <div className="text-red-500">{error}</div>}

                <TransitionGroup>
                    {Object.keys(roadmap).length > 0 ? (
                        Object.keys(roadmap).map((semester) => (
                            <CSSTransition
                                key={semester}
                                timeout={500}
                                classNames="fade"
                            >
                                <div className="my-5">
                                    <h4 className="text-xl font-semibold mb-4">
                                        Semester {semester}
                                    </h4>
                                    <table className="min-w-full table-fixed border-collapse text-center">
                                        <thead>
                                            <tr className="bg-gray-200">
                                                <th className="border px-4 py-2" style={{ width: '150px' }}>
                                                    Course Code
                                                </th>
                                                <th className="border px-4 py-2" style={{ width: '250px' }}>
                                                    Subject Name
                                                </th>
                                                <th className="border px-4 py-2" style={{ width: '150px' }}>
                                                    Credit Hours
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.isArray(roadmap[semester]) &&
                                                roadmap[semester].map((course, index) => (
                                                    <tr key={index}>
                                                        <td className="border px-4 py-2" style={{ width: '150px' }}>
                                                            {course.courseCode}
                                                        </td>
                                                        <td className="border px-4 py-2" style={{ width: '250px' }}>
                                                            {course.subjectName}
                                                        </td>
                                                        <td className="border px-4 py-2" style={{ width: '150px' }}>
                                                            {course.creditHours}
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CSSTransition>
                        ))
                    ) : (
                        <CSSTransition
                            key="no-data"
                            timeout={500}
                            classNames="fade"
                        >
                            <div>No roadmap data available for {termYear}.</div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default MSCSRoadmap;
