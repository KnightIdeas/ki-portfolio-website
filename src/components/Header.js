import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ModalContact from './ModalContact';
import CurrentCV from '../assets/files/Web Development CV 25-10-2024'; // CV file

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    // Function to handle "Contact" click
    const handleContactClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>Knight Ideas</Link>
            </div>
            <button className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                ☰
            </button>

            {/* Desktop Navigation */}
            <nav className='desktop-nav'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/projects' className='nav-link'>Projects</Link>
                <Link to='/' className='nav-link' onClick={handleContactClick}>Contact</Link>
                <a href={CurrentCV} className='nav-link' download>CV</a> {/* CV download link */}
            </nav>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className='mobile-nav'>
                    <Link to='/' className='nav-link' onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link to='/projects' className='nav-link' onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
                    <Link to='/contact' className='nav-link' onClick={handleContactClick}>Contact</Link>
                    <a href={CurrentCV} className='nav-link' onClick={() => setIsMobileMenuOpen(false)} download>CV</a> {/* CV download for mobile */}
                </nav>
            )}

            <ModalContact isOpen={isModalOpen} onClose={handleCloseModal} />
        </header>
    );
}

export default Header;
