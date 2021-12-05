import React from 'react';
import logo from '../images/stationery.png'

const Header = () => {
    return (
        <div className="title">
            <header>
                <img className="logo" src={logo} alt="logo" />
                <h1>My Toolbox</h1>
            </header>
            <h2>It's not the tool -- it's how you use it</h2>
        </div>
        
    );
};

export default Header;


