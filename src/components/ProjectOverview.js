import React from "react";
import Carousel from "./Carousel";
import imageA from '../assets/images/Tountra-g-project-image.png';
import imageB from '../assets/images/DOTD-g-project-image.png';
import imageC from '../assets/images/KnightMovies-app-image.png';
import './ProjectOverview.css';


function ProjectOverview () {
const webImages = [
   imageA, imageB, imageC
];
const gameImages = [

];

return (
    <div className="project-overview-container">
    <div className="project-overview-left">
        <h1>Web Projects</h1>
        <Carousel images={webImages} />
        <button className="internal-button" onClick={""}>See All Projects</button>
    </div>
    <div className="project-overview-right">
    <h1>Game Projects</h1>
    <Carousel images={gameImages} />
    <button className="internal-button" onClick={""}>See All Games</button>
    </div>
    </div>
);
}

export default ProjectOverview;
