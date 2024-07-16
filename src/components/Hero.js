import React from "react";
import './Hero.css';

function Hero({ titleA, subtitleA, titleB, subtitleB, imgUrl, imgAlt }) {
    return (
        <section className="hero">
            <div className="hero-content-A">
                <h2>{titleA}</h2>
                <h3>{subtitleA}</h3>
            </div>
            <div className="hero-image">
                <img src={imgUrl} alt={imgAlt} />
            </div>
            <div className="hero-content-B">
                <h2>{titleB}</h2>
                <h3>{subtitleB}</h3>
            </div>
        </section>
    );
}

export default Hero;