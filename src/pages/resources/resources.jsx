import React from "react";
import ResourcesBanner from "./banner";
import ResourcesIntro from "./intro";
import ResourcesImages from "./images";

const Resources = () => {
    return(
        <div className="mb-40">
            <ResourcesBanner />
            <ResourcesIntro />
            <ResourcesImages />
        </div>
    )
}

export default Resources;