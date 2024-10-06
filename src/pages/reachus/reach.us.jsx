import React from 'react';
import ReachBanner from './banner';
import ReachIntro from './intro';
import ReachMain from './main';
import FollowUs from '../../components/common/follow';

const ReachUs = () => {
    return(
        <div className='mb-40'>
            <ReachBanner />
            <ReachIntro />
            <ReachMain />
            <FollowUs />
        </div>
    )
}

export default ReachUs;