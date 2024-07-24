import React from "react";
import LinkButton from "./LinkButton";
import './CallToAction.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function CallToAction () {
    return (
        <div className="footer-container">
        <section className="call-to-action">
            <h2>
                Get in touch
            </h2>
            <button onClick={handleClick}>
                Let's Collaborate
            </button>
            <button>
                Download CV
            </button>
        </section>
        <section className="footer-interior">
            <div className="social-icons">
                <LinkButton to='https://www.facebook.com/' external={true} className='social-icon'>
                <FontAwesomeIcon icon={faFacebook} className="facebook-icon"/>
                </LinkButton>
                <LinkButton to='https://www.linkedin.com/in/' external={true} className='social-icon'>
            <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"/>
            </LinkButton>
            <LinkButton to='https://www.github.com/' external={true} className='social-icon'>
            <FontAwesomeIcon icon={faGithub} className="github-icon"/>
            </LinkButton>
            <LinkButton to='' external={true} className='social-icon'>
            <FontAwesomeIcon icon={faEnvelope} className="envelope-icon"/>
            </LinkButton>
                </div> 
        </section>
        </div>
    );
}

export default CallToAction;

function handleClick() {
    console.log('Handle click for CTO');
}