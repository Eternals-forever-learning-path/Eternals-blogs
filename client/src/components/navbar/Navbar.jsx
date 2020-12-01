import React from 'react';
import Search from 'components/search/Search';
import './navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <span className='logo'>E</span>
                <span>ternals - A Blogging Experience</span>
            </div>
            <Search />
        </div>
    )
}

export default Navbar;