import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import './Menu.css';
import Button from './../Button';

function Menu({ buttonLabel }) {
    return ( 
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt="EtcFlix" />
            </Link>


            <Button as={Link} className="ButtonLink" to="/cadastro/Video">
              {buttonLabel}
            </Button>
        </nav>
 );
}

export default Menu;