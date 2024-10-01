import React from "react";

const AlumniConvocation = () => {
    return (
        <div className="my-20 flex flex-col justify-center items-center">
            <div className="text-primary-color text-4xl font-bold">Milestones of Success: Enjoy Our Graduation Ceremony Highlights!</div>
            <div className="text-primary-color text-xl font-semibold mt-5 mx-20 text-center leading-9">From the proud steps across the stage to the heartfelt smiles of achievement, our graduation ceremony was a true celebration of hard work, dedication, and dreams realized. It was an unforgettable day filled with joy, laughter, and the beginning of new journeys. Join us as we take a look back at the memorable moments of the ceremony—milestones that symbolize the endless potential of every graduate. Here’s to the future that awaits!</div>
            <div className="grid grid-cols-12 mt-10">
                <div className="col-span-4 mx-5 px-5 py-5"><iframe width="450" height="252" src="https://www.youtube.com/embed/UBiizttT-ag?si=ky2uJyFPJYsysmW9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='yt-vid'></iframe></div>
                <div className="col-span-4 mx-5 px-5 py-5"><iframe
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2Fsj8yTPBUHm%2F&width=500&show_text=false&height=281&appId"
                    width="450"
                    height="281"
                    style={{ border: 'none', overflow: 'hidden' }}
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" /></div>
                <div className="col-span-4 mx-5 px-5 py-5"> <iframe
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1222460684630754&width=500&show_text=false&height=280&appId"
                    width="450"
                    height="281"
                    style={{ border: 'none', overflow: 'hidden' }}
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" /></div>
            </div>
        </div>
    )
}


export default AlumniConvocation