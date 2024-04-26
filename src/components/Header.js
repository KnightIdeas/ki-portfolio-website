import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this is linked properly

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                <Link to='/contact' className='cta-button'>Let's Collaborate</Link>
            </nav>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className='mobile-nav'>
                    <Link to='/' className='nav-link' onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link to='/projects' className='nav-link' onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
                    <Link to='/contact' className='nav-link' onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    <Link to='/contact' className='cta-button' onClick={() => setIsMobileMenuOpen(false)}>Let's Collaborate</Link>
                </nav>
            )}
        </header>
    );
}

export default Header;
