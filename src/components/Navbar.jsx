import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className='nav'>
            <div className='logo'>
                <Link to='/'>Boierul</Link>
            </div>
            <div className='nav-links'>
                <div className='nav-item'>
                    <Link to='/products' className='nav-link'>
                        Products
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link to='/about' className='nav-link'>
                        About
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link to='/contact' className='nav-link'>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;