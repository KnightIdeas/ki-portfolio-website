import { React, useState } from 'react';

import MileStone from './MileStone';
import Gallery from './Gallery';
import Updates from './Updates';

// Add the milestones to my Trello board and attach them dynamically.

function CurrentProject () {
    // UI elements
    return (
        <div className="page-container">
            <h1 className="page-title">
            Current Project
            </h1>
            <div className="subtitle-container">
            <h2 className="section-title">
            Page Subtitle
            </h2>
            </div>
            <section className="overview-container">
                <h3>Overview Title</h3>
                <p>Overview Text</p>
                <img />
            </section>
            <MileStone />
            <Gallery />
            <Updates />
        </div>
    )
}

export default CurrentProject;