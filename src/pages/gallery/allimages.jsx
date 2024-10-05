import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAlbums } from '../../redux/actions/gallery.action.jsx';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';

const ImagesView = () => {
    const dispatch = useDispatch();
    const { albumName } = useParams();
    const albums = useSelector((state) => state.gallery.albums || []);
    const [album, setAlbum] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        dispatch(fetchAlbums());
    }, [dispatch]);

    useEffect(() => {
        if (albums.length > 0) {
            const foundAlbum = albums.find((album) => album.name === albumName);
            setAlbum(foundAlbum);
        }
    }, [albums, albumName]);

    const handleImageClick = (image) => {
        setSelectedImage(`http://localhost:8001/uploads/${image.replace(/\\/g, '/')}`);
        setOpen(true);
    };

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
                                    <div className="image-container">
                                        <img
                                            src={`http://localhost:8001/uploads/${image.replace(/\\/g, '/')}`}
                                            alt=""
                                            className="w-full object-cover cursor-pointer"
                                            onClick={() => handleImageClick(image)}
                                        />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-12 text-center">No images found in this album</div>
                        )}
                    </div>

                    {selectedImage && (
                        <Lightbox open={open} close={() => setOpen(false)} slides={[{ src: selectedImage }]} />
                    )}
                </>
            ) : (
                <div className="text-center text-xl">Loading album details...</div>
            )}
        </div>
    );
};

export default ImagesView;
