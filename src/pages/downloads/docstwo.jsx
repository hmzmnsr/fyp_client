import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDownloads } from "../../redux/actions/download.action";

const DocsTwo = () => {
    const dispatch = useDispatch();

    const { downloads = [], loading, error } = useSelector((state) => state.download || {});

    useEffect(() => {
        dispatch(fetchDownloads());
    }, [dispatch]);

    return (
        <div className="mx-20 px-10">
            <div className="font-bold text-4xl text-primary-color my-5 border-b-4 border-primary-color pb-4">
                Downloads
            </div>

            {loading && <p>Loading downloads...</p>}

            {error && <p className="text-red-600">Error: {error}</p>}

            {!loading && !error && downloads.length > 0 && (
                <div className="grid grid-cols-6 gap-4 py-5">
                    {downloads.map((doc, index) => (
                        <div
                            key={index}
                            className="col-span-1 bg-gray-200 flex flex-col justify-evenly items-center p-4 h-56"
                        >
                            <div className="text-xl text-primary-color text-center h-2/3 px-2 flex justify-center items-center rounded-3xl w-full">
                                {doc.documentName}
                            </div>
                            {/* URL path for the attachments */}
                            <a
                                href={`http://localhost:8001/uploads/${doc.attachment}`}  
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="px-6 py-2 bg-primary-color hover:bg-red-700 transition duration-300 ease-in-out text-white">
                                    View More
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            )}

            {!loading && !error && downloads.length === 0 && <p>No downloads available.</p>}
        </div>
    );
};

export default DocsTwo;
