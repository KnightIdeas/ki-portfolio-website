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
            IdClash
            </h1>
            <div className="subtitle-container">
            <h2 className="section-title">
            Developing a Thriving Debate Community with an Engaging and Social App Experience.
            </h2>
            </div>
            <section className="overview-container">
                <h3>Project Overview</h3>
                <p>Overview Text</p>
                <ul>
                    <li><strong>Live Debate Rooms: </strong>Real-time voice and video channels for dynamic debates.</li>
                    <li><strong>Community Voting System: </strong>Users can vote on debate topics and evaluate debaters based on clarity, persuasiveness, and respectfulness.</li>
                    <li><strong>User Profiles & Reputation Scores: </strong>Personalized profiles that showcase achievements, badges, and reputation within the community.</li>
                    <li><strong>Interactive Spectating: </strong>Features that allow spectators to engage by commenting, voting, and participating in post-debate discussions.</li>
                    <li><strong>Leaderboard & Achievements: </strong>Gamification elements to motivate participation and recognize top debaters.</li>
                </ul>
                <img />
            </section>
            <MileStone />
            <Gallery />
            <Updates />
        </div>
    )
}

export default CurrentProject;