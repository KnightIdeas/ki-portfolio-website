import React from 'react'

export default function Updates() {

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

    // Format the date for the updates
    updates.forEach((update) => {
        update.date = update.date.join('-')
    });

  return (
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
                ))}
            </section>
  )
}
