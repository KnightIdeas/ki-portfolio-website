import React from "react";
import './Hero.css';

function Hero({ titleA, subtitleA, titleB, subtitleB, imgUrl, imgAlt, imageArrayA, imageArrayB }) {
    // Move handleIconImages inside Hero function
    

    return (
        <section className="hero">
            <div className="hero-content-A">
                <h2>{titleA}</h2>
                <h3>{subtitleA}</h3>
                <div className="web_icon-container">
                    {handleIconImages(imageArrayA)}
                </div>
            </div>
            <div className="hero-image">
                <img src={imgUrl} alt={imgAlt} />
            </div>
            <div className="hero-content-B">
                <h2>{titleB}</h2>
                <h3>{subtitleB}</h3>
                <div className="game_icon-container">
                    {handleIconImages(imageArrayB)}
                </div>
            </div>
        </section>
    );
}

export default Hero;
function handleIconImages(imageArray) {
        if (!imageArray || imageArray.length === 0) return null;

        // Map through the array to get each image and return them
        return imageArray.map((item, index) => (
            <span
                key={index}
                className={item.type === 'fontawesome' ? 'icon-class-fa' : 'icon-class'}
                data-tooltip={item.tooltip}
            >
                {item.icon}
            </span>
        ));
    }