import React from 'react'
import GalleryBanner from './banner';
import GalleryIntro from './intro';

const Gallery = () => {
    return (
        <div className='mb-40'>
            <GalleryBanner />
            <GalleryIntro />
        </div>
    )
}

export default Gallery;