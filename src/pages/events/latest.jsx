import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvent } from "../../redux/actions/event.action";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './dots.css';

const PreviousArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <MdArrowBackIos
            className={className}
            style={{
                ...style,
                display: "block",
                color: "white",
                fontSize: "40px",
                zIndex: 1,
                left: "-50px",
            }}
            onClick={onClick}
        />
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <MdArrowForwardIos
            className={className}
            style={{
                ...style,
                display: "block",
                color: "white",
                fontSize: "40px",
                zIndex: 1,
                right: "-50px",
            }}
            onClick={onClick}
        />
    );
};

const EventsLatest = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const dispatch = useDispatch();
    const { events = [], loading } = useSelector((state) => state.event || {});

    useEffect(() => {
        dispatch(fetchEvent());
    }, [dispatch]);

    const latestEvents = [...events]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 10);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: "30px",
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        beforeChange: (current, next) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "20px",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "10px",
                }
            }
        ]
    };

    const totalDots = latestEvents.length || 7;
    const dots = Array.from({ length: totalDots }, (_, index) => (
        <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => {
                setCurrentSlide(index);
                sliderRef.current.slickGoTo(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
        />
    ));

    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };
        return new Date(dateString).toLocaleString(undefined, options);
    };

    return (
        <div className="mx-20 py-20 px-20 my-20 bg-primary-color">
            <div className="text-5xl text-white font-semibold flex justify-center items-center mb-12">Latest Events</div>
            {loading ? (
                <div className="text-white text-center">Loading events...</div>
            ) : (
                <Slider ref={sliderRef} {...settings}>
                    {latestEvents.map((event, index) => (
                        <div key={index} className="px-4 py-10">
                            <img
                                src={`http://localhost:8001/uploads/${event.image.split('\\').pop()}`}
                                alt={event.name}
                                className="w-full h-64 object-cover mx-auto"
                            />
                            <div className="py-5 text-center bg-secondary-color">
                                <div className="text-white text-lg leading-9">Event: {event.name}</div>
                                <div className="text-white text-lg leading-9">Venue: {event.venue}</div>
                                <div className="text-white text-lg leading-9">Date: {formatDate(event.date)}</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
            <div className="flex justify-center mt-4">
                {dots}
            </div>
        </div>
    );
};

export default EventsLatest;
