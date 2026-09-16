import React from 'react';
import '..//..//assets/css/task5css/navbar.css'

const Navbar = () => {
    return (
        <div>
            <header className='align-center'>
                <div className='header-logo'>
                    <h2>HANDORA</h2>
                </div>
                <div className='nav-container'>
                    <ul className='nav-list'>
                        <li className='nav-item'>Home</li>
                        <li className='nav-item'>Products</li>
                        <li className='nav-item'>Contact</li>
                    </ul>
                </div>
            </header>
            
        </div>
    );
};

export default Navbar;