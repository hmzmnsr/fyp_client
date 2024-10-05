import React from 'react';
import EventBanner from './banner';
import EventIntro from './intro';
import EventsLatest from './latest';
import EventHeading from './heading';

const Events = () => {
    return(
        <div>
            <EventBanner/>
            <EventHeading/>
            <EventsLatest />
            <EventIntro/>
        </div>
    )
}

export default Events;