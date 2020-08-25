import React from 'react';
import logo from '../../src/images/logo.png';
import logoStyle from './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" srcset=""/>
            <nav className="nav">
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <a href="/other">Othe</a>
            </nav>
        </div>
    );
};

export default Header;