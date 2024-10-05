import React from 'react';
import DownloadBanner from './banner';
import DocsOne from './docsone';
import DocsTwo from './docstwo';

const Download = () => {
    return (
        <div className='mb-40'>
            <DownloadBanner/>
            <DocsOne/>
            <DocsTwo/>
        </div>
    )
}

export default Download;