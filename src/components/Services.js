import React from 'react';
import './Services.css';
import image1Src from '../assets/images/ServiceItem-Image-A1.webp';
import image2Src from '../assets/images/ServiceItem-Image-A2.webp';
import image3Src from '../assets/images/ServiceItem-Image-A3.webp';
// Add in tech icons here.

function Services() {
    return (
        <section className='services'>
            <h2>How I Can Help</h2>
            <div className='service-list'>
                <div className='service-item'>
                    <img src={image1Src} alt="Service description" />
                    <h3>Leadership Qualities</h3>
                    <ul>
                        <li>
                            Lead c# developer in multiple game jams.
                        </li>
                        <li>
                            Coding and technology coaching in primary schools.
                        </li>
                    </ul>
                </div>
                <div className='service-item'>
                    <img src={image2Src} alt="Service description" />
                    <h3>Embracing New Technnologies</h3>
                    <ul>
                        <li>
                            Early adoption of AI tools.
                        </li>
                        <li>
                            Chat GPT and Copilot for improved debugging.
                        </li>
                        <li>
                            Projects made with OpenAI API.
                        </li>
                    </ul>
                </div>
                <div className='service-item'>
                    <img src={image3Src} alt="Service description" />
                    <h3>Lifelong Learning</h3>
                    {/* Display tech icons here*/}
                </div>
            </div>
        </section>
    );
}

export default Services;