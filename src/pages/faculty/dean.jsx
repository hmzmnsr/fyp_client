import React from "react";
import dean from "../../assets/dean.png";

const FacultyDean = () => {
    return(
        <div className="my-20 mx-40 py-4 px-4">
            <div className="text-primary-color text-4xl border-b-4 border-b-primary-color leading-8 font-bold pb-4 mb-6">Dean's Message</div>
            <div className="grid grid-cols-12">
                <div className="col-span-3 flex  items-center"><img src={dean} alt="dean" className="w-full"/></div>
                <div className="col-span-9 mx-5">
                    <div className="text-primary-color text-xl leading-8 mb-5">The University of South Asia was established many years ago with a clear vision; to promote computer education among the masses, and to build the confidence among youth to be able to uplift the state of nation’s information technology industry to the standards of global markets. All those years continuously we have been endeavoring with full energies to spread the professional knowledge to our students. We enjoy the proud magnificence of mentoring thousands of graduates that are currently working as work-force as well as entrepreneurs in the software industry. They are perfectly competent with any lot of professionals locally and internationally. But success does not come without dares and contests.</div>
                    <div className="text-primary-color text-xl leading-8">We have faced lots of challenges during our journey. One such challenge includes the adaptation of prevailing curricula and schemes of study to match the ever changing needs and demands of markets and clients. And that is what requires the not only the need to quickly cope with newer paradigms and technologies but also to be the flag bearers of paradigm shifts. The present day need of learning and promoting data science had already been foreseen at our quarters, and the gradual adaptation of the curriculum was initiated many years ago.</div>
                </div>
            </div>
            <div className="text-primary-color text-xl leading-8 mt-4">Artificial intelligence is one single domain that acts as a flag-ship of all the knowledge basis in the field of academics. It has its span over machine learning, industrial automation, space research, medicine, war-fare, and much more. Students and teachers are encouraged to perform research and create newer knowledge or tools to have this science solve problems and needs. We are constantly at work to spread modern education the modern way to build the ability among our youth to set their targets and work hard to achieve them. You will observe our efforts reflected from the very structure of our degree programs. We have not left out any elements and dimensions of the needful. Our most emphasis is on teaching you the theoretical and practical traits of artificial intelligence, it is now not just the future rather it is already an on-going actuality. As the academic figure-head of the computer sciences department I encourage the new aspirant students to confidently choose their programs. Seek advice and guidance from my teachers in order to best set your itinerary and be able to fulfill the dreams of your parents. </div>
        </div>
    )
}

export default FacultyDean;