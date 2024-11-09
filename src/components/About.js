import React from "react";
import './About.css';

function About({ titleA, blurbA1, blurbA2, titleB, blurbB1, blurbB2, imgUrl, imgAlt}) {
    // Move handleIconImages inside Hero function
    

    return (
        <section className="about">
            <div className="about-content-A">
                <h2>{titleA}</h2>
                <h3>{blurbA1}</h3>
                <h3>{blurbA2}</h3>
            </div>
            <div className="about-image">
                <img src={imgUrl} alt={imgAlt} />
            </div>
            <div className="about-content-B">
                <h2>{titleB}</h2>
                <h3>{blurbB1}</h3>
                <h3>{blurbB2}</h3>
            </div>
        </section>
    );
}

export default About;