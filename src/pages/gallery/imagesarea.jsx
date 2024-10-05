import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from '../../redux/actions/gallery.action.jsx';
import { useNavigate } from 'react-router-dom';

const GalleryImages = () => {
    const dispatch = useDispatch();
    const albums = useSelector((state) => state.gallery.albums || []);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAlbums());
    }, [dispatch]);

    const handleViewMore = (albumName) => {
        navigate(`/album/${albumName}`);
    };

    return (
        <div className="mx-20 px-10">
            <div className="text-primary-color text-4xl font-bold text-center mb-20">
                Recent Highlights Captured
            </div>
            <div className="grid grid-cols-12 my-10">
                {albums.length > 0 ? (
                    albums.map((album, index) => (
                        <div
                            key={index}
                            className="col-span-3 mx-2 py-5 px-5 bg-gray-200 flex flex-col justify-center items-center"
                        >
                            {album.coverPhoto ? (
                                <img
                                    src={`http://localhost:8001/uploads/${album.coverPhoto.split('\\').pop()}`}
                                    alt={album.name}
                                    className="w-full object-cover my-2"
                                />
                            ) : (
                                <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                                    No Cover Photo
                                </div>
                            )}
                            <div className="text-primary-color text-xl my-2">
                                Album Name: {album.name}
                            </div>
                            <button
                                className="text-white bg-primary-color py-2 px-6 my-2"
                                onClick={() => handleViewMore(album.name)}
                            >
                                View More
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="col-span-12 text-center">No albums found</div>
                )}
            </div>
        </div>
    );
};

export default GalleryImages;
