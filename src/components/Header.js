import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this is linked properly
import ModalContact from './ModalContact';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isModalOpen, setModalOpen] = useState(false);

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
                <Link to='/contact' className='nav-link'>Contact</Link>
                <button className='button-typeB' onClick={handleContactClick}>Lets Collaborate</button>
            </nav>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className='mobile-nav'>
                    <Link to='/' className='nav-link' onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link to='/projects' className='nav-link' onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
                    <Link to='/contact' className='nav-link' onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    <button className='button-typeB'>Lets Collaborate</button>
                </nav>
            )}
            <ModalContact isOpen={isModalOpen} onClose={handleCloseModal} />
        </header>
    );
}

export default Header;
