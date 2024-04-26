import React from 'react';
import './Services.css';
import image1Src from '../assets/images/ServiceItem-Image-A1.webp';
import image2Src from '../assets/images/ServiceItem-Image-A2.webp';
import image3Src from '../assets/images/ServiceItem-Image-A3.webp';

function Services() {
    return (
        <section className='services'>
            <h2>How I Can Help</h2>
            <div className='service-list'>
                <div className='service-item'>
                    <img src={image1Src} alt="Service description" />
                    <h3>Automate Your Processes</h3>
                    <p>Embrace the power of AI to streamline your operations and reduce manual workload.</p>
                </div>
                <div className='service-item'>
                    <img src={image2Src} alt="Service description" />
                    <h3>Integrate Systems Seamlessly</h3>
                    <p>Efficiently connect your systems and processes with AI-driven solutions for enhanced productivity.</p>
                </div>
                <div className='service-item'>
                    <img src={image3Src} alt="Service description" />
                    <h3>Innovate and Grow</h3>
                    <p>Don't let technology hold you back. Utilize AI to bring your creative business ideas to life.</p>
                </div>
            </div>
        </section>
    );
}

export default Services;