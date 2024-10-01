import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlumni } from "../../redux/actions/alumni.action";
import 'animate.css';

const AlumniSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('animate__fadeInRight');

    const dispatch = useDispatch();
    const { alumni, loading, error } = useSelector((state) => state.alumni);

    useEffect(() => {
        dispatch(fetchAlumni());
    }, [dispatch]);

    const goToNextCheckpoint = useCallback(() => {
        setAnimationClass('animate__fadeOutLeft');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % alumni.length);
            setAnimationClass('animate__fadeInRight');
        }, 500);
    }, [alumni.length]);

    const goToPreviousCheckpoint = useCallback(() => {
        setAnimationClass('animate__fadeOutRight');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + alumni.length) % alumni.length);
            setAnimationClass('animate__fadeInLeft');
        }, 500);
    }, [alumni.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNextCheckpoint();
        }, 6000);

        return () => clearInterval(interval);
    }, [goToNextCheckpoint]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!alumni.length) {
        return <div>No alumni data available</div>;
    }

    const previousIndex = (currentIndex - 1 + alumni.length) % alumni.length;
    const nextIndex = (currentIndex + 1) % alumni.length;

    return (
        <div className='grid grid-cols-12 bg-primary-color mx-20 my-20 px-20 py-40 relative'>
            {/* Title and Buttons */}
            <div className='col-span-3 flex flex-col justify-center items-center'>
                <div className='text-white text-4xl font-bold flex justify-center items-center text-center' style={{ lineHeight: '60px' }}>
                    A Journey of Graduates: From the Past to the Present!
                </div>
                <div className='flex justify-center items-center mt-8'>
                    <button
                        onClick={goToPreviousCheckpoint}
                        className="bg-secondary-color text-white px-8 py-2 hover:bg-red-700 transition duration-300"
                    >
                        Back
                    </button>
                    <button
                        onClick={goToNextCheckpoint}
                        className="bg-secondary-color text-white px-8 py-2 ml-4 hover:bg-red-700 transition duration-300"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Main Slider Section */}
            <div className='col-span-9 flex justify-center items-center relative overflow-hidden'>
                {/* Card Container */}
                <div className="flex justify-center items-center w-full relative">
                    {/* Left card (previous checkpoint) */}
                    <div
                        className={`bg-gray-200 py-16 px-10 mx-5 animate__animated opacity-70 scale-75 transition-transform duration-300 flex flex-col justify-center items-center`}
                        style={{ zIndex: 1 }}
                    >
                        <div className='text-3xl mb-4 font-bold'>Class of {alumni[previousIndex].class}</div>
                        <div className='text-xl mb-2'>Batch: {alumni[previousIndex].batch}</div>
                        <div className='text-xl mb-2'>Students Graduated: {alumni[previousIndex].totalStudents}</div>
                    </div>

                    {/* Center card (current checkpoint) */}
                    <div
                        className={`bg-gray-200 mx-5 px-10 py-16 animate__animated ${animationClass} flex flex-col justify-center items-center`}
                        style={{ zIndex: 2 }}
                    >
                        <div className='text-3xl mb-4 font-bold'>Class of {alumni[currentIndex].class}</div>
                        <div className='text-xl mb-2'>Batch: {alumni[currentIndex].batch}</div>
                        <div className='text-xl mb-2'>Students Graduated: {alumni[currentIndex].totalStudents}</div>
                    </div>

                    {/* Right card (next checkpoint) */}
                    <div
                        className={`bg-gray-200 py-20 px-10 mx-5 animate__animated opacity-70 scale-75 transition-transform duration-300 flex flex-col justify-center items-center`}
                        style={{ zIndex: 1 }}
                    >
                        <div className='text-3xl mb-4 font-bold'>Class of {alumni[nextIndex].class}</div>
                        <div className='text-xl mb-2'>Batch: {alumni[nextIndex].batch}</div>
                        <div className='text-xl mb-2'>Students Graduated: {alumni[nextIndex].totalStudents}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumniSlider;
