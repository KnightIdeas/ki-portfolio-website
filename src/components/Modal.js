import React from "react";
import './Modal.css';

const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="image-gallery">
                    <img src={project.image} alt={project.title} />
                </div>
                <button onClick={onClose}>Close</button>
            </div>

        </div>
    );
};

export default Modal;