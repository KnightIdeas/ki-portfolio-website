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
    mileStones.push(new MileStone(0, 'Precode Planning', false, [15,12,2024]));
    mileStones.push(new MileStone(1, 'Initial Base Code Setup', false, [31,12,2024]));
    mileStones.push(new MileStone(2, 'Base Functionality Coding', false, [15,1,2025]));
    mileStones.push(new MileStone(3, 'Initial Testing', false, [31,1,2025]));
    mileStones.push(new MileStone(4, 'First Draft UI Design', false, [10,2,2025]));
    mileStones.push(new MileStone(5, 'User Interface Development', false, [25,2,2025]));
    mileStones.push(new MileStone(6, 'Feedback on First UI Draft', false, [28,2,2025]));
    mileStones.push(new MileStone(7, 'Add Data and Asynchronous Functionality', false, [15,3,2025]));
    mileStones.push(new MileStone(8, 'Second Round of Testing', false, [25,3,2025]));
    mileStones.push(new MileStone(9, 'Second Draft UI Design', false, [31,3,2025]));
    mileStones.push(new MileStone(10, 'Implement Advanced Features', false, [20,4,2025]));
    mileStones.push(new MileStone(11, 'Feedback on Second UI Draft', false, [25,4,2025]));
    mileStones.push(new MileStone(12, 'Third Round of Testing', false, [30,4,2025]));
    mileStones.push(new MileStone(13, 'Final UI Design Adjustments', false, [10,5,2025]));
    mileStones.push(new MileStone(14, 'Bug Fixing and Optimization', false, [25,5,2025]));
    mileStones.push(new MileStone(15, 'Prepare for Launch', false, [31,5,2025]));
    mileStones.push(new MileStone(16, 'Launch and Monitor', false, [15,6,2025]));
    mileStones.push(new MileStone(17, 'Post-Launch Enhancements', false, [30,6,2025]));

    // format the date for the milestone
    mileStones.forEach((milestone) => {
        milestone.estCompletionDate = milestone.estCompletionDate.join('-');
    });

    // Method for adding images
    gallery.push(new Image(TempImage,'image coming soon', 'temp image title'));

    // Method for adding updates
    updates.push(new Update('Milestones added',[3,12,2024],'Added the first batch of milestones to the page.',gallery[0]))

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
            <h2 className="section-title">
            Page Subtitle
            </h2>
            </div>
            <section className="overview-container">
                <h3>Overview Title</h3>
                <p>Overview Text</p>
                <img />
            </section>
            <section className="milestones-container">
                <h2 className='section-title'>Milestones</h2>
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
                <h2 className='section-title'>Gallery</h2>
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
                <h2 className='section-title'>Updates</h2>
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