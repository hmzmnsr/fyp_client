import React, { useRef, useState } from "react";
import Slider from "react-slick";
import event from "../../assets/events/events.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
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

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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

    const totalDots = 7;
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

    return (
        <div className="mx-20 py-20 px-20 my-10 bg-primary-color">
            <div className="text-5xl text-white font-bold flex justify-center items-center mb-12">Latest Events</div>
            <Slider ref={sliderRef} {...settings}>
                {[1, 2, 3, 4].map((item, index) => (
                    <div key={index} className="px-4 py-10">
                        <img src={event} alt="event" />
                        <div className="py-5 text-center bg-secondary-color">
                            <div className="text-white text-lg leading-9">Event: Green Day</div>
                            <div className="text-white text-lg leading-9">Venue: Ideas Lab</div>
                            <div className="text-white text-lg leading-9">Date: 02:23:32 04:50pm</div>
                        </div>
                    </div>
                ))}
            </Slider>
            {/* Custom Dots */}
            <div className="flex justify-center mt-4">
                {dots}
            </div>
        </div>
    );
};

export default EventsLatest;
