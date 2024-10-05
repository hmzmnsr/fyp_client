import React from 'react'
import GalleryBanner from './banner';
import GalleryIntro from './intro';
import GalleryImages from './imagesarea';
import FollowUs from '../../components/common/follow';

const Gallery = () => {
    return (
        <div className='mb-40'>
            <GalleryBanner />
            <GalleryIntro />
            <GalleryImages />
            <FollowUs />
        </div>
    )
}

export default Gallery;