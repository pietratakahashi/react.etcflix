import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './Menu.css';
import Button from './../Button';

function Menu({ buttonLabel }) {
    return ( 
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="EtcFlix" />
            </a>


            <Button as="a" className="ButtonLink" href="/">
              {buttonLabel}
            </Button>
        </nav>
 );
}

export default Menu;