import React from 'react';
//import '../styles/navigation.scss';
import '../index.css';
import logo from '../img/instaFont.png';
import searchIcon from '../img/searchIcon.jpeg';
import Menu from './Menu';


const Navigation = () => {
  return (
    <div className="navigation">
        <div className="container">
            <img className="logo" src={logo} alt="logo" />
            <div className="search-bar">
                <img className="search-icon" src={searchIcon} alt="icon" />
                <span className="search-text">Искать</span>
            </div>
            <Menu />
        </div>
    </div>
  )
}

export default Navigation