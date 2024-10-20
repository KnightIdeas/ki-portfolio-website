import React from "react";
import LinkButton from "./LinkButton";
import './CallToAction.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"; // Brand icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Envelope from solid icons
import Modal from "./Modal";
import ModalContact from "./ModalContact";
import { useState } from "react";
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
                    <LinkButton to='https://www.facebook.com/' external={true} className='social-icon'>
                        <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
                    </LinkButton>
                    <LinkButton to='https://www.linkedin.com/in/' external={true} className='social-icon'>
                        <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                    </LinkButton>
                    <LinkButton to='https://www.github.com/' external={true} className='social-icon'>
                        <FontAwesomeIcon icon={faGithub} className="github-icon" />
                    </LinkButton>
                    <LinkButton to='' external={true} className='social-icon'>
                        <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
                    </LinkButton>
                </div>
            </section>
            <section className="call-to-action">
                <h2>Get in touch</h2>
                <button onClick={handleContactClick}>Let's Collaborate</button>
                
                {/* Download CV Button */}
                <a href={CurrentCV} className='nav-link'>
                    <button>Download CV</button>
                </a>
            </section>
            
            
            <ModalContact isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
        
    );
}

export default CallToAction;
