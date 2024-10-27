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
                    <img src={image1Src} alt="Web Development" />
                    <h3>Web Development</h3>
                    <ul>
                        <li>
                            Expertise in crafting responsive, mobile-first web applications with clean and scalable code.
                        </li>
                        <li>
                            Experienced with modern front-end frameworks and libraries, building user-centered interfaces.
                        </li>
                        <li>
                            Technologies: React, Vue, Tailwind CSS, Bootstrap, Next.js, Three.js.
                        </li>
                    </ul>
                </div>

                <div className='service-item'>
                    <img src={image2Src} alt="JavaScript Specialist" />
                    <h3>JavaScript Specialist</h3>
                    <ul>
                        <li>
                            Proficient in both front-end and back-end JavaScript, ensuring seamless full-stack development.
                        </li>
                        <li>
                            Strong understanding of advanced coding patterns, enhancing modularity and efficiency.
                        </li>
                        <li>
                            Patterns: Factory Method, Command Pattern, Observer Pattern, and more.
                        </li>
                    </ul>
                </div>

                <div className='service-item'>
                    <img src={image3Src} alt="Game Development" />
                    <h3>Game Development</h3>
                    <ul>
                        <li>
                            Passionate about creating immersive digital experiences through game development.
                        </li>
                        <li>
                            Led and contributed to multiple game jams and projects, from concept to completion.
                        </li>
                        <li>
                            Tools: Unity, Godot, Blender, Game Maker, Scratch, and more.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default Services;