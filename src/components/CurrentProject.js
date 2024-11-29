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

    class Update {
        constructor(title, date, text, image) {
            this.title = title;
            this.date = date;
            this.text = text;
            this.image = image;
        }
    }

    // Arrays
    const mileStones = [];
    const gallery = [];
    const updates = [];

    // Add milestones
    mileStones.push(new MileStone(1, 'Fully respond to brief', false, [1,11,2024]));

    // format the date for the milestone
    mileStones.forEach((milestone) => {
        milestone.estCompletionDate = milestone.estCompletionDate.join('-');
    });

    // Method for adding images
    gallery.push(new Image(TempImage,'image coming soon', 'temp image title'));

    // Method for adding updates
    updates.push(new Update('This is an update',[1,11,2024],'This is update text',gallery[0]))
    updates.push(new Update('This is an update',[1,11,2024],'This is update text',gallery[0]))

    // Format the date for the updates
    updates.forEach((update) => {
        update.date = update.date.join('-');
    });

    // Method for estimating deadline dates
    // Check for the current date
    function getDate() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const date = currentDate.getDate();
    return `${month}/${date}/${year}`;
    }

    // Check the current date against the specified completion date, OPTIONAL
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
            Page Subtitle
            </h2>
            </div>
            <section className="overview-container">
                <h3>Overview Title</h3>
                <p>Overview Text</p>
                <img />
            </section>
            <section className="milestones-container">
                {mileStones.map((milestone) => (
                    <div
                    key={milestone.id}
                    className={`timeline-item ${milestone.completed ? `completed` : ``}`}>
                    <div className='timeline-content'> {milestone.text}
                        <span className='milestone-icon'>
                            {milestone.completed ? '✔️' : '⏳'}{milestone.estCompletionDate}
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
            <section className='updates-container'>
                {updates.map((item, index) =>(
                <div key={index}>
                
                <h3>
                    {item.title}
                </h3>
                <p>{item.date}</p>
                <p>{item.text}</p>
                </div>
                ))};
            </section>
        </div>
    )
}

export default CurrentProject;