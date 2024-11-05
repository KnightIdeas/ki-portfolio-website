import React from "react";
import './Modal.css';

const Modal = ({ isOpen, onClose, onLink, project }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{project.title}</h2>
                <p>{project.fullDescription}</p>
                <div className="image-gallery">
                    <img src={project.image} alt={project.title} />
                </div>
                <button className="button-typeA" onClick={onClose}>Close</button>
                <button className="button-typeB" onClick={onLink}>Project Link</button>
            </div>

        </div>
    );
};

export default Modal;