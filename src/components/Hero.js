import React from "react";
import './Hero.css';

function Hero({ title, subtitle, imgUrl, imgAlt }) {
    return (
        <section className="hero">
            <div className="hero-content">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </div>
            <div className="hero-image">
                <img src={imgUrl} alt={imgAlt} />
            </div>
        </section>
    );
}

export default Hero;