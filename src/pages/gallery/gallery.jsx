import React from 'react'
import GalleryBanner from './banner';
import GalleryIntro from './intro';
import GalleryImages from './imagesarea';

const Gallery = () => {
    return (
        <div className='mb-40'>
            <GalleryBanner />
            <GalleryIntro />
            <GalleryImages />
        </div>
    )
}

export default Gallery;