import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/home.page";
import Programs from "../pages/programs/programs";
import ReachUs from "../pages/reachus/reach.us";
import Resources from "../pages/resources/resources";
import Gallery from "../pages/gallery/gallery";
import Fyp from "../pages/fyp/fyp";
import Faculty from "../pages/faculty/faculty";
import Events from "../pages/events/events";
import Download from "../pages/downloads/download";
import Alumni from "../pages/alumni/alumni";
import ImagesView from "../pages/gallery/allimages";

const PublicRoutes = () => {
    return(
        <Routes>
          <Route path="/" element = {<HomePage/>} />
          <Route path="/programs" element = {<Programs/>} />
          <Route path="/reachus" element = {<ReachUs/>} />
          <Route path="/resources" element = {<Resources/>} />
          <Route path="/gallery" element = {<Gallery/>} />
          <Route path="/fyp" element = {<Fyp/>} />
          <Route path="/faculty" element = {<Faculty/>} />
          <Route path="/events" element = {<Events/>} />
          <Route path="/downloads" element = {<Download/>} />
          <Route path="/alumni" element = {<Alumni/>} />
          <Route path="/album/:albumName" element={<ImagesView />} />
        </Routes>
    )
}

export default PublicRoutes;