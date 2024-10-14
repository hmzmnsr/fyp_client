import React from 'react';
import EventBanner from './banner';
import EventIntro from './intro';
import EventsLatest from './latest';
import EventHeading from './heading';
import FollowUs from '../../components/common/follow';

const Events = () => {
    return(
        <div className="mb-40 text-justify">
            <EventBanner/>
            <EventHeading/>
            <EventsLatest />
            <EventIntro/>
            <FollowUs />
        </div>
    )
}

export default Events;