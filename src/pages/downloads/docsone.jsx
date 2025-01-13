import React from "react";
import doc from "../../assets/docs/doc.pdf";
import doc1 from "../../assets/docs/doc1.pdf";
import doc2 from "../../assets/docs/doc2.pdf";
import doc3 from "../../assets/docs/doc3.pdf";
import doc4 from "../../assets/docs/doc4.pdf";
import doc5 from "../../assets/docs/doc5.pdf";
import doc6 from "../../assets/docs/doc6.pdf";
import doc7 from "../../assets/docs/doc7.pdf";
import doc8 from "../../assets/docs/doc8.pdf";

const DocsOne = () => {
    const docs = [
        { title: "FYP Final Document Format", link: doc },
        { title: "FYP Final Hard Document Format", link: doc1 },
        { title: "FYP Presentation Guidelines", link: doc2 },
        { title: "FYP Ongoing Project Ideas", link: doc3 },
        { title: "FYP Pending Project Ideas", link: doc4 },
        { title: "FYP Completed Project Ideas", link: doc5 }
    ];

    const additionalDocs = [
        { title: "Software Project Domains and Types", link: doc6 },
        { title: "Software Project Effort and Cost Estimation Guideline", link: doc7 },
        { title: "Software Project Scope Management Guideline", link: doc8 }
    ];

    return (
        <div className="mx-20 my-2 px-10 py-10">
            <div className="font-bold text-4xl text-primary-color my-5 border-b-4 border-primary-color pb-4">FYP Material</div>
            <div className="grid grid-cols-12 gap-4 py-5">
                {docs.map((doc, index) => (
                    <div key={index} className="col-span-2 bg-gray-200 flex flex-col justify-evenly items-center p-4 h-56">
                        <div className="text-xl text-primary-color text-center h-2/3 px-2 flex justify-center items-center rounded-3xl">{doc.title}</div>
                        <a href={doc.link} target="_blank" rel="noopener noreferrer">
                            <button className="px-6 py-2 bg-primary-color hover:bg-red-700 transition duration-300 ease-in-out text-white">View More</button>
                        </a>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-12 gap-4 py-5">
                {additionalDocs.map((doc, index) => (
                    <div key={index} className="col-span-2 bg-gray-200 flex flex-col justify-evenly items-center p-4 h-56">
                        <div className="text-xl text-primary-color text-center h-2/3 px-2 flex justify-center items-center rounded-3xl">{doc.title}</div>
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
