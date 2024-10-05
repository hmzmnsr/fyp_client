import React from "react";
import rs1 from "../../assets/resources/rs1.jpg";
import rs2 from "../../assets/resources/rs2.jpg";
import rs3 from "../../assets/resources/rs3.jpg";
import rs4 from "../../assets/resources/rs4.webp";
import rs5 from "../../assets/resources/rs5.webp";
import rs6 from "../../assets/resources/rs6.webp";

const ResourcesImages = () => {
    return (
        <div className="mx-20">
            <div className="grid grid-cols-12">
                <div className="col-span-6 mx-4 flex flex-col items-center">
                    <img src={rs1} alt="rs1" className="w-full h-4/6 object-cover shadow-2xl shadow-gray-800" />
                    <div className="text-primary-color text-xl py-5 px-10 leading-9 bg-gray-200">
                        Our state-of-the-art computer lab is equipped with high-performance computers and industry-standard software like Adobe Creative Cloud and various IDEs, all running on high-speed internet. Designed to meet your web development and digital design needs, the lab offers ergonomic workstations, quiet zones, and collaborative areas. You'll also find technical support and regular workshops to enhance your skills. Please follow our usage guidelines to maintain a conducive environment. For assistance or account setup, contact our IT support team.
                    </div>
                </div>

                <div className="col-span-6 mx-4 flex flex-col items-center">
                    <img src={rs2} alt="rs2" className="w-full h-4/6 object-cover shadow-2xl shadow-gray-800" />
                    <div className="text-primary-color text-xl py-5 px-10 leading-9 bg-gray-200">
                        The Research Lab is a hub for innovation and advanced research, featuring cutting-edge computers and essential software tools to support your projects. Enjoy high-speed internet, comfortable workstations, and spaces designed for both solo and group work. Whether you're analyzing data or developing new technologies, you'll find the resources you need here. Our dedicated IT support team is available for any assistance or account setup, providing a conducive environment for exploration, creation, and achievement.
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 my-20">
                <div className="col-span-6 mx-4 flex flex-col items-center">
                    <img src={rs3} alt="rs3" className="w-full h-4/6 object-cover shadow-2xl shadow-gray-800" />
                    <div className="text-primary-color text-xl py-5 px-10 leading-9 bg-gray-200">
                        HBS2 Lab is the practical hub for computer science students, designed to support hands-on learning experiences in computer science courses. Equipped with high-performance computers and specialized software, it provides an immersive environment for coding, software development, and project work. With high-speed internet access and collaborative spaces tailored for coursework, along with dedicated instructors and technical support.
                    </div>
                </div>

                <div className="col-span-6 mx-4 flex flex-col items-center">
                    <img src={rs4} alt="rs4" className="w-full h-4/6 object-cover shadow-2xl shadow-gray-800"  />
                    <div className="text-primary-color text-xl py-5 px-10 leading-9 bg-gray-200">
                        The Resource Center offers a sanctuary for both academic endeavors and leisurely moments. With air-conditioned spaces and top-notch computers, students can tackle assignments and projects with ease. Beyond productivity, a curated selection of games and entertainment options provides the perfect way to unwind and recharge. Whether you're here for a quick study session or a relaxing break, the Resource Center blends functionality and relaxation, making it the ultimate retreat for students.
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 my-10">
                <div className="col-span-6 mx-4 flex flex-col items-center">
                    <img src={rs5} alt="rs5" className="w-full h-4/6 object-cover shadow-2xl shadow-gray-800" />
                    <div className="text-primary-color text-xl py-5 px-10 leading-9 bg-gray-200">
                        Our university library is a state-of-the-art facility designed to support your academic journey. Offering air-conditioned study rooms, it provides a comfortable environment for research, study, and collaboration. With an extensive collection covering every discipline, you'll find books, journals, and digital resources to meet all your scholarly needs. Whether you're exploring classic literature, scientific research, or the latest publications, the library is equipped to facilitate your academic success.
                    </div>
                </div>

                <div className="col-span-6 mx-4 flex flex-col items-center">
                    <img src={rs6} alt="rs6" className="w-full h-4/6 object-cover shadow-2xl shadow-gray-800" />
                    <div className="text-primary-color text-xl py-5 px-10 leading-9 bg-gray-200">
                        Our university classrooms are designed to provide an optimal learning environment, featuring air conditioning for comfort during lectures and discussions. Each room is equipped with LED screens, enabling instructors to deliver engaging and visually rich presentations. These modern amenities enhance the educational experience, fostering an interactive atmosphere where students can fully engage with the course material and communicate ideas effectively.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourcesImages;
