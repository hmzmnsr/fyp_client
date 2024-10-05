import React from 'react';
import EventBanner from './banner';
import EventIntro from './intro';
import EventsLatest from './latest';

const Events = () => {
    return(
        <div>
            <EventBanner/>
            <EventsLatest />
            <EventIntro/>
        </div>
    )
}

export default Events;