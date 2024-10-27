import React, { useState } from "react";
import LinkButton from "./LinkButton";
import './CallToAction.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"; // Brand icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Envelope from solid icons
import ModalContact from "./ModalContact";
import CurrentCV from '../assets/files/WebDevCV-ChristopherKnight-15-12-23.pdf';

function CallToAction() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleContactClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="footer-container">
            <section className="footer-interior">
                <div className="social-icons">
                    {/* Social Icons with Tooltips */}
                    <LinkButton to='https://www.facebook.com/KnightIdeas' data-tooltip="Facebook" external={true} className='social-icon'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </LinkButton>
                    <LinkButton to='https://www.linkedin.com/in/knightideas/' data-tooltip="LinkedIn" external={true} className='social-icon'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </LinkButton>
                    <LinkButton to='https://github.com/KnightIdeas' data-tooltip="GitHub" external={true} className='social-icon'>
                        <FontAwesomeIcon icon={faGithub} />
                    </LinkButton>
                    <LinkButton to='mailto:chris@knightideas.co.uk' data-tooltip="Email" external={true} className='social-icon'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </LinkButton>
                </div>
            </section>
            <section className="call-to-action">
                <h2>Get in touch</h2>
                
                {/* "Let's Collaborate" button with a unique class */}
                <button onClick={handleContactClick} className="collaborate-btn">Let's Collaborate</button>
                
                {/* "Download CV" button with a unique class */}
                <a href={CurrentCV} className='nav-link'>
                    <button className="cv-btn">Download CV</button>
                </a>
            </section>
            
            <ModalContact isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default CallToAction;
