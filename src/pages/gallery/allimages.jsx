import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // To access albumName from the URL
import { fetchAlbums } from '../../redux/actions/gallery.action.jsx'; // Fetch albums action

const ImagesView = () => {
    const dispatch = useDispatch();
    const { albumName } = useParams(); // Get albumName from the URL
    const albums = useSelector((state) => state.gallery.albums || []); // Get albums from the Redux store
    const [album, setAlbum] = useState(null);

    useEffect(() => {
        dispatch(fetchAlbums()); // Fetch albums on component mount
    }, [dispatch]);

    useEffect(() => {
        if (albums.length > 0) {
            const foundAlbum = albums.find((album) => album.name === albumName); // Find album by name
            setAlbum(foundAlbum);
        }
    }, [albums, albumName]);

    return (
        <div className="mx-20 px-10 py-10">
            {album ? (
                <>
                    <div className="text-primary-color text-4xl font-bold text-center">
                        Album Name: {album.name}
                    </div>
                    <div className="grid grid-cols-12 my-20">
                        {album.images && album.images.length > 0 ? (
                            album.images.map((image, index) => (
                                <div key={index} className="col-span-3 mx-2">
                                    <img
                                        src={`http://localhost:8001/uploads/${image.split('\\').pop()}`}
                                        alt={`Image ${index + 1}`}
                                        className="w-full object-cover"
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="col-span-12 text-center">No images found in this album</div>
                        )}
                    </div>
                </>
            ) : (
                <div className="text-center text-xl">Loading album details...</div>
            )}
        </div>
    );
};

export default ImagesView;
