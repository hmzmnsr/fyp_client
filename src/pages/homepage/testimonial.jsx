import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import s1 from "../../assets/testimonial/s1.webp";
import s5 from "../../assets/testimonial/s5.webp";
import s4 from "../../assets/testimonial/s4.webp";
import s3 from "../../assets/testimonial/s3.webp";
import s2 from "../../assets/testimonial/s2.webp";

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-300 shadow-xl rounded-2xl p-16 transform transition duration-500 hover:scale-105 hover:shadow-2xl mx-8 text-justify">
            <div className="flex items-center mb-6">
                <img
                    className="w-20 h-20 rounded-full border-4 border-white shadow-md"
                    src={testimonial.image}
                    alt={testimonial.name}
                />
                <div className="ml-5 text-white">
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-sm opacity-80">{testimonial.title}</p>
                </div>
            </div>
            <blockquote className="text-white italic mb-6">
                "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center">
                <span className="text-yellow-400 text-lg mr-2">★★★★★</span>
                <p className="text-white text-sm opacity-70">5.0 Rating</p>
            </div>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            style={{
                position: 'absolute',
                top: '50%',
                left: '-50px',
                transform: 'translateY(-50%)',
                zIndex: '1',
                cursor: 'pointer',
                fontSize: '50px',
                color: '#1e90ff',
            }}
        >
            <IoIosArrowBack className='shadow-2xl shadow-primary-color'/>
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            style={{
                position: 'absolute',
                top: '50%',
                right: '-50px',
                transform: 'translateY(-50%)',
                zIndex: '1',
                cursor: 'pointer',
                fontSize: '50px',
                color: '#1e90ff',
            }}
        >
            <IoIosArrowForward  className='shadow-2xl shadow-primary-color'/>
        </div>
    );
};

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Maira Yousaf',
            title: 'Software Engineering Graduate',
            image: s5,
            quote: 'My time at this university has been incredible. The diverse course offerings allowed me to explore various aspects of business, and the professors are always available to provide guidance and support. The real-world case studies and internships helped me apply my knowledge practically, making me feel prepared for the job market. I have made lasting friendships and valuable connections that will benefit me for years to come.',
        },
        {
            name: 'Hamza Mansoor',
            title: 'Computer Science Graduate',
            image: s1,
            quote: 'The learning experience at this institution has been transformative for me. The faculty are not only knowledgeable but also genuinely care about the success of their students. The hands-on projects and collaborative environment have helped me develop practical skills that I will carry into my career. I am grateful for the opportunities to network with industry professionals and for the support I received throughout my studies.',
        },
        {
            name: 'Hira Rasheed',
            title: 'Software Engineering Graduate',
            image: s3,
            quote: 'I can not express how transformative my experience at this university has been. The faculty are not only knowledgeable but also genuinely care about our success. The hands-on fieldwork and research opportunities have deepened my understanding of environmental issues and their complexities. I have gained invaluable skills and insights that I will carry with me into my career and for the support I received throughout my studies.',
        },
        {
            name: 'Amir Qadir ',
            title: 'Computer Science Graduate',
            image: s4,
            quote: 'My time in the Computer Science program has been nothing short of amazing. The curriculum is rigorous and up-to-date with the latest industry trends, which has prepared me well for my internship. The professors are incredibly supportive and always available to help. I have also made lasting friendships and connections through group projects and hackathons. This university has truly shaped my career path, and excited to enter the tech world',
        },
        {
            name: 'Mahnoor Tanveer',
            title: 'Computer Science Graduate',
            image: s2,
            quote: 'Studying Environmental Science has opened my eyes to the pressing issues facing our planet. The program is both challenging and inspiring, with hands-on experiences in the field that bring the classroom to life. The faculty are passionate and knowledgeable, encouraging us to think critically and engage in meaningful research. I am grateful for the support and resources available to us. I feel prepared to make a difference in the world!',
        },
    ];

    const settings = {
        dots: true,
        infinite: true, 
        speed: 500, 
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: (dots) => (
            <div style={{ marginTop: "30px" }}>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="mx-20 my-10 py-16 relative">
            <div className="text-5xl font-bold text-primary-color mb-5 text-center">Hear From Our Students</div>
            <div className="text-3xl font-bold text-primary-color mb-16 text-center">
                Discover how our students’ experiences have shaped their futures!
            </div>

            <div className="relative">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index}>
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
