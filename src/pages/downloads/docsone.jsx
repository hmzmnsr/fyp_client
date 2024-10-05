import React from "react";

const DocsOne = () => {
    return (
        <div className="mx-20 my-2 px-10 py-10">
            <div className="font-bold text-4xl text-primary-color my-5 border-b-4 border-primary-color pb-4">Fyp Material</div>
            <div className="grid grid-cols-12 gap-4 py-5">
                {[
                    { title: "FYP Final Document Format", link: "https://www.facebook.com/download/preview/795527857632841/" },
                    { title: "FYP Final Hard Document Format", link: "https://www.facebook.com/download/preview/519588815348917/" },
                    { title: "FYP Presentation Guidelines", link: "https://www.facebook.com/download/preview/323183618120082" },
                    { title: "FYP Ongoing Project Ideas", link: "https://www.facebook.com/download/preview/487674228808120/" },
                    { title: "FYP Pending Project Ideas", link: "https://www.facebook.com/download/preview/1555762484571529/" },
                    { title: "FYP Completed Project Ideas", link: "https://www.facebook.com/download/preview/1080993998908274/" }
                ].map((doc, index) => (
                    <div key={index} className="col-span-2 bg-gray-200 flex flex-col justify-evenly items-center p-4 h-56 rounded-3xl">
                        <div className="text-xl text-primary-color text-center h-2/3 bg-gray-300 px-2 flex justify-center items-center rounded-3xl">{doc.title}</div>
                        <a href={doc.link} target="_blank" rel="noopener noreferrer">
                            <button className="px-6 py-2 bg-primary-color hover:bg-red-700 transition duration-300 ease-in-out text-white">View More</button>
                        </a>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-12 gap-4 py-5">
                {[
                    { title: "Software Project Domains and Types", link: "https://www.facebook.com/download/preview/1079818578785315/" },
                    { title: "Software project effort and cost estimation guideline", link: "https://www.facebook.com/download/preview/1550108658332889/" },
                    { title: "Software project scope management guideline", link: "https://www.facebook.com/download/preview/233183017197803" }
                ].map((doc, index) => (
                    <div key={index} className="col-span-2 bg-gray-200 flex flex-col justify-evenly items-center p-4 h-56 rounded-3xl">
                        <div className="text-xl text-primary-color text-center h-2/3 bg-gray-300 px-2 flex justify-center items-center rounded-3xl">{doc.title}</div>
                        <a href={doc.link} target="_blank" rel="noopener noreferrer">
                            <button className="px-6 py-2 bg-primary-color hover:bg-red-700 transition duration-300 ease-in-out text-white">View More</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocsOne;
