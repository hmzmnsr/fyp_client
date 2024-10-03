import React from "react";
import event1 from "../../assets/events/event1.webp";
import event2 from "../../assets/events/event2.webp";
import event3 from "../../assets/events/event3.webp";
import event4 from "../../assets/events/event4.webp";

const EventIntro = () => {
    return(
        <div className=" my-10">
            <div className="grid grid-cols-12 mx-20">
                <div className="col-span-5 flex justify-center items-center shadow-2xl shadow-primary-color"><img src={event1} alt="event" className="object-cover w-full"/></div>
                <div className="col-span-7 px-16 flex text-center items-center justify-center flex-col">
                    <div className="text-4xl font-bold text-primary-color mb-5">Joy Fest</div>
                    <div className="text-xl text-primary-color leading-10">At the University of South Asia, events are a cornerstone of our vibrant campus life. Our commitment to fostering a culture of learning, innovation, and collaboration is reflected in the wide range of events we host throughout the academic year. From academic symposiums and research showcases to cultural festivals and leadership workshops, our events offer something for everyone. These events not only enhance the university experience but also empower students to broaden their horizons, develop new skills, and connect with like-minded individuals.</div>
                </div>
            </div>

            <div className="grid grid-cols-12 mx-20 mt-10">
                <div className="col-span-7 px-16 flex text-center items-center justify-center flex-col">
                    <div className="text-4xl font-bold text-primary-color mb-5">Brainstorm Bash</div>
                    <div className="text-xl text-primary-color leading-10">Our academic events provide students with a platform to present their research, share their ideas, and engage with experts across various disciplines. Whether it's a conference, a hackathon, or a project exhibition, these opportunities allow students to apply what they’ve learned in the classroom to real-world challenges. Faculty and guest speakers contribute their expertise, creating an environment where knowledge is exchanged, and new perspectives are explored. For many, these events serve as a stepping stone toward future careers and academic endeavors.</div>
                </div>
                <div className="col-span-5 flex justify-center items-center shadow-2xl shadow-primary-color"><img src={event2} alt="event" className="object-cover w-full"/></div>
            </div>

            <div className="grid grid-cols-12 mx-20 mt-10">
                <div className="col-span-5 flex justify-center items-center shadow-2xl shadow-primary-color"><img src={event3} alt="event" className="object-cover w-full"/></div>
                <div className="col-span-7 px-16 flex text-center items-center justify-center flex-col">
                    <div className="text-4xl font-bold text-primary-color mb-5">Career Quest</div>
                    <div className="text-xl text-primary-color leading-10">Beyond academics, our university events celebrate diversity and foster a sense of community. Cultural festivals, artistic performances, and social gatherings are a chance for students to express themselves, showcase their heritage, and enjoy the rich tapestry of cultures that make up our campus. These events encourage unity and inclusivity, reminding us that education is not only about learning facts but about understanding and appreciating the diverse world around us.</div>
                </div>
            </div>

            <div className="grid grid-cols-12 mx-20 mt-10">
                <div className="col-span-7 px-16 flex text-center items-center justify-center flex-col">
                    <div className="text-4xl font-bold text-primary-color mb-5">Culture Jam</div>
                    <div className="text-xl text-primary-color leading-10">At the heart of all our events is the goal of personal and professional development. Through networking sessions, career fairs, and leadership seminars, students can connect with industry leaders, alumni, and mentors who can guide them on their journey. These experiences help students build confidence, develop critical thinking, and prepare for success in an ever-changing global landscape. No matter your interests, the University of south asia has events that will inspire, engage, and enrich your university experience.</div>
                </div>
                <div className="col-span-5 flex justify-center items-center shadow-2xl shadow-primary-color"><img src={event4} alt="event" className="object-cover w-full"/></div>
            </div>
        </div>
    )
}

export default EventIntro;