import React from 'react';
import './Services.css';
import image1Src from '../assets/images/ServiceItem-Image-A1.webp';
import image2Src from '../assets/images/ServiceItem-Image-A2.webp';
import image3Src from '../assets/images/ServiceItem-Image-A3.webp';
// Add in tech icons here.

function Services() {
    return (
        <section className='services'>
            <h2>How can I help?</h2>
            <div className='service-list'>
                <div className='service-item'>
                    <img src={image1Src} alt="Service description" />
                    <h3>Web Development</h3>
                    <ul>
                        <li>
                            Well versed in core coding methedologies and patterns.
                        </li>
                        <li>
                            Experience with modern front end development libraries and frameworks.
                        </li>
                        <li>
                            React, Vue, TailWind, BootStrap, Next.js, Three.js.
                        </li>
                    </ul>
                </div>
                <div className='service-item'>
                    <img src={image2Src} alt="Service description" />
                    <h3>Javascript Specialist</h3>
                    <ul>
                        <li>
                            Able to code front end and back end using JavaScript.
                        </li>
                        <li>
                            Deep knowledge of popular coding patterns such as:
                        </li>
                        <li>
                            Factory Method, Command Pattern, Observer Pattern and more.
                        </li>
                    </ul>
                </div>
                <div className='service-item'>
                    <img src={image3Src} alt="Service description" />
                    <h3>Game Development</h3>
                    <ul>
                        <li>
                            A passion for bringing digital media to life with various game development tools.
                        </li>
                        <li>
                            Lead developer on multiple gamejams and game projects to date.
                        </li>
                        <li>
                            Unity, Godot, Blender, Game Maker, Scratch and more.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Services;