import React from "react";
import ResourcesBanner from "./banner";
import ResourcesIntro from "./intro";
import ResourcesImages from "./images";
import FollowUs from "../../components/common/follow";

const Resources = () => {
    return(
        <div className="mb-40">
            <ResourcesBanner />
            <ResourcesIntro />
            <ResourcesImages />
            <FollowUs/>
        </div>
    )
}

export default Resources;