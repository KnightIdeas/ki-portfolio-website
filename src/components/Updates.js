import React, { useState } from 'react'
import './Updates.css';

export default function Updates() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    class Update {
        constructor(title, date, text) {
            this.title = title;
            this.date = date;
            this.text = text;
        }
    }

    const updates = [];

    // Method for adding updates
    updates.push(new Update('Milestones added',[3,12,2024],'Added the first batch of milestones to the page.'));
    updates.push(new Update('Title and text added',[7,12,2024],'Added the title IdClash and the overview text for the project.'));

    // Format the date for the updates
    const formatDate = (dateArray) => {
        return dateArray.map(num => String(num).padStart(2, '0')).join('-');
    };

    updates.forEach((update) => {
        update.date = formatDate(update.date);
    });

  return (
    <section className='updates-container'>
                <h2 className='section-title'>Updates</h2>
                <button className='update-toggle-button' onClick={() => setIsCollapsed(!isCollapsed)}>
                    {isCollapsed ? "Expand" : "Collapse"}
                </button>
                {!isCollapsed && (<div className='update-card'>
                {updates.map((item, index) =>(
                <div key={index}>
                
                <h3>
                    {item.title}
                </h3>
                <p>{item.date}</p>
                <p>{item.text}</p>
                </div>
                ))}
                </div>
                )}
            </section>
  )
}
