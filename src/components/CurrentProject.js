import { React, useState } from 'react';

import MileStone from './MileStone';
import Gallery from './Gallery';
import Updates from './Updates';
import './CurrentProject.css';

import CoverImage from '../assets/images/IdClash-coverImage.webp';

// Add the milestones to my Trello board and attach them dynamically.

function CurrentProject() {
    // UI elements
    return (
        <div className="page-container">
            <h1 className="page-title">
                IdClash
            </h1>
            <div className='cover-image-container'>
            <img src={CoverImage} alt='IdClash cover image' className='cover-image' />
            </div>
            <div className="subtitle-container">
                <h2 className="section-title">
                    Developing a Thriving Debate Community with an Engaging and Social App Experience.
                </h2>
            </div>
            <section className="overview-container">
                <h3>Project Overview</h3>
                <p><strong>IdClash </strong>
                    is my inaugural full-stack application, meticulously crafted to
                    <strong> develop a thriving debate community </strong>
                    through an
                    <strong> engaging and social app experience.</strong><br />
                
                    This project marks my first foray into full-stack development, with a <strong>front-end first approach</strong> utilizing <strong>Vue</strong>, <strong>Nuxt</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.<br />
                    These modern technologies ensure a seamless, responsive, and visually appealing interface that delivers an exceptional user experience.</p>
                <p>

                    The app is <strong>deployed and tested on Vercel</strong>, providing a reliable and scalable platform that supports continuous integration and delivery.<br />
                 This deployment strategy enables efficient updates and real-time improvements, ensuring users always have access to the latest features and enhancements.</p>
                <p>

                    <strong>Vision for IdClash:</strong> My vision for <strong>IdClash</strong> is to create an <strong>rewarding platform</strong> where users can <strong>engage in competitive debates</strong>, <strong>exchange diverse ideas</strong>, and <strong>hone their debating skills</strong> within a <strong>respectful and dynamic environment</strong>.<br />
                 <strong></strong>IdClash aims to bridge the gap between structured debate formats and the spontaneity of social interactions, making debating both compelling and socially rewarding.</p>
                <p><strong>Exciting Features:</strong></p>
                <ul>
                    <li><strong>Live Debate Rooms: </strong>Real-time voice and video channels for dynamic debates.</li>
                    <li><strong>Community Voting System: </strong>Users can vote on debate topics and evaluate debaters based on clarity, persuasiveness, and respectfulness.</li>
                    <li><strong>User Profiles & Reputation Scores: </strong>Personalized profiles that showcase achievements, badges, and reputation within the community.</li>
                    <li><strong>Interactive Spectating: </strong>Features that allow spectators to engage by commenting, voting, and participating in post-debate discussions.</li>
                    <li><strong>Leaderboard & Achievements: </strong>Gamification elements to motivate participation and recognize top debaters.</li>
                </ul>
            </section>
            <MileStone />
            <Gallery />
            <Updates />
        </div>
    )
}

export default CurrentProject;