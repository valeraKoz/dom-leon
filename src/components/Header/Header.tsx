import React from 'react';
import TopBar from './TopBar/TopBar';
import "./header.scss"
import Navigation from './Navigation/Navigation';

function Header(){

    return(
        <header className='header'>
            <TopBar/>
            <Navigation/>
        </header>
        
    )
}

export default Header;