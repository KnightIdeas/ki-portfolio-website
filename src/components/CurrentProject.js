import { React, useState } from 'react';
import TempImage from '../assets/images/ComingSoon-project-image.png'

function CurrentProject () {
    
    // Constructors for updatable elements
    class MileStone {
        constructor(id, text, completed) {
            this.id = id;
            this.text = text;
            this.completed = completed;
        }
    }

    class Image {
        constructor(src, alt, title) {
            this.src = src;
            this.alt = alt;
            this.title = title;
        }
    }

    // Arrays
    const mileStones = [];
    const gallery = [];

    // Method for updating milestones
    

    // Add milestones
    mileStones.push(new MileStone(1, 'Fully respond to brief', false));
    

    // Method for adding images
    gallery.push(new Image(TempImage,'image coming soon', 'temp image title'));
    gallery.push(new Image(TempImage,'image coming soon', 'temp image title'));
    gallery.push(new Image(TempImage,'image coming soon', 'temp image title'));
    
    // Add images

    // UI elements
    return (
        <div className="page-container">
            <h1 className="page-title">
            Current Project
            </h1>
            <div className="subtitle-container">
            <h2 className="page-subtitle">

            </h2>
            <h3 className="page-subtitle">

            </h3>
            </div>
            <section className="overview-container">
                <h3></h3>
                <p></p>
            </section>
            <section className="milestones-container">
                {mileStones.map((milestone) => (
                    <div
                    key={milestone.id}
                    className={`timeline-item ${milestone.completed ? `completed` : ``}`}>
                    <div className='timeline-content'> {milestone.text}
                        <span className='milestone-icon'>
                            {milestone.completed ? '✔️' : '⏳'}
                        </span>
                    </div>
                    </div>
                ))}
                <h3 className="estimation-text">

                </h3>
            </section>
            <section className="gallery-container">
                {gallery.map((item, index) => (
                    <img 
                    key={index}
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    />
                ))}
            </section>
        </div>
    )
}

export default CurrentProject;