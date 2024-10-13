import React, { useState } from "react";
import './ModalContact.css';

const ModalContact = ({ isOpen, onClose}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        onClose();
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </label>
                    <label>
                        Email:
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </label>
                    <label>
                        Message:
                        <textarea 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            required 
                        />
                    </label>
                    <button type="submit" className="button-typeB">Send</button>
                </form>
                <button className="button-typeA" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ModalContact;