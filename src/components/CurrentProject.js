import { React, useState } from 'react';
import TempImage from '../assets/images/ComingSoon-project-image.png'

// Add the milestones to my Trello board and attach them dynamically.

function CurrentProject () {
    
    // Constructors for updatable elements
    class MileStone {
        constructor(id, text, completed, estCompletionDate) {
            this.id = id;
            this.text = text;
            this.completed = completed;
            this.estCompletionDate = estCompletionDate;
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

    // State management for milestone
    const [completionDate, setCompletionDate] = ('');
    

    // Add milestones
    mileStones.push(new MileStone(1, 'Fully respond to brief', false, [1,11,2024]));
    

    // Method for adding images
    gallery.push(new Image(TempImage,'image coming soon', 'temp image title'));
    gallery.push(new Image(TempImage,'image coming soon', 'temp image title'));
    gallery.push(new Image(TempImage,'image coming soon', 'temp image title'));
    
    // Method for estimating deadline dates
    // Check for the current date
    function getDate() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const date = currentDate.getDate();
    return `${month}/${date}/${year}`;
    }

    // Check the current date against the specified completion date
    function getEstimatedTBADate() {
        mileStones.map((milestone) => {

        })
    }
    // 

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