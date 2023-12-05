import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h2>Knowledge Cafe</h2>
            <div>
                <a href="/home">Home</a>
                <a href="/about us">About us</a>
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
                <a href="/contact us">Contact Us</a>
            </div>
        </nav>
    );
};

export default Header;