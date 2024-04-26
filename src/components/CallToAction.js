import React from "react";
import './CallToAction.css';

function CallToAction () {
    return (
        <section className="call-to-action">
            <h2>
                Ready to Transform Your Business with AI?
            </h2>
            <p> 
                Unlock the full potential of your operations with custom AI solutions that drive growth and efficency.
            </p>
            <button onClick={handleClick}>
                Let's Collaborate
            </button>
        </section>
    );
}

export default CallToAction;

function handleClick() {
    console.log('Handle click for CTO');
}