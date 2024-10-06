import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";

const ReachMain = () => {
    return (
        <div className="mx-5 md:mx-20 my-10">
            <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Form Section */}
                <div className="col-span-12 md:col-span-6 flex flex-col items-center py-10 bg-gray-200 rounded-lg shadow-lg">
                    <div className="text-4xl font-semibold pb-3 mb-6">
                        General Inquiries
                    </div>
                    <div className="w-11/12 md:w-9/12 my-4">
                        <label className="text-lg text-primary-color mb-2 block">Full Name</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-color"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="w-11/12 md:w-9/12 my-4">
                        <label className="text-lg text-primary-color mb-2 block">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-color"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="w-11/12 md:w-9/12 my-4">
                        <label className="text-lg text-primary-color mb-2 block">Phone</label>
                        <input
                            type="tel"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-color"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="w-11/12 md:w-9/12 my-4">
                        <label className="text-lg text-primary-color mb-2 block">Query</label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-color"
                            placeholder="Enter your query"
                            rows="5" // You can adjust this value to increase/decrease the height
                        />

                    </div>
                    <div className="my-4">
                        <button className="bg-primary-color text-white py-3 px-12 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out">
                            Submit
                        </button>
                    </div>
                </div>

                {/* Campus Section */}
                <div className="col-span-12 md:col-span-6 flex flex-col items-center py-10 bg-primary-color rounded-lg shadow-lg px-20">
                    <div className="text-4xl font-semibold text-white mb-6">
                        Cantt Campus
                    </div>
                    <div className="flex items-start my-4 w-10/12">
                        <FaMapLocationDot className="text-3xl text-white mr-3" />
                        <p className="text-xl text-white">
                            Address: 47 Tufail Rd, Saddar Town, Lahore Cantt, Punjab
                        </p>
                    </div>
                    <div className="flex items-start my-4 w-10/12">
                        <MdOutlineEmail className="text-3xl text-white mr-3" />
                        <p className="text-xl text-white">
                            Email: admissions@usa.edu.pk
                        </p>
                    </div>
                    <div className="flex items-center my-4 w-10/12">
                        <IoPhonePortraitOutline className="text-3xl text-white mr-3" />
                        <p className="text-xl text-white">Phone: +92 311 711 1112</p>
                    </div>
                    <div className="text-4xl font-semibold text-white my-10 ">
                        Locate on Map
                    </div>
                    <div className="drop-shadow-2xl shadow-black w-full md:w-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13602.68340264793!2d74.3792398!3d31.533199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919050d90b4fac3%3A0xa46dbb2def95e45a!2sUniversity%20of%20South%20Asia!5e0!3m2!1sen!2s!4v1716323768856!5m2!1sen!2s"
                            width="600"
                            height="290"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                            title="university-location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReachMain;
