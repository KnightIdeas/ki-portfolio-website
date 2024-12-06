import React from 'react'
import './MileStone.css';

export default function MileStone() {

    // Constructors for updatable elements
    class MileStone {
        constructor(id, text, completed, estCompletionDate) {
            this.id = id;
            this.text = text;
            this.completed = completed;
            this.estCompletionDate = estCompletionDate;
        }
    }

    const mileStones = [];

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

  return (
    <section className="milestones-container">
                <h2 className='section-title'>Milestones</h2>
                <div className='milestone-card'>
                {mileStones.map((milestone) => (
                    <div
                    key={milestone.id}
                    className={`timeline-item ${milestone.completed ? `completed` : ``}`}
                    style={{ backgroundColor: milestone.completed ? '#d4edda' : '#ffe554'}}>
                    <div className='timeline-content'> {milestone.text}
                        <div className='milestone-icon'>
                            {milestone.completed ? '✔️' : '⏳'}
                        </div>
                    </div>
                    <div className='date-text'>{milestone.estCompletionDate}</div>
                    </div>
                ))}
                <h3 className="estimation-text">

                </h3>
                </div>
            </section>
  )
}
