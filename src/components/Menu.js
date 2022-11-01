import React from 'react'
//import '../styles/menu.scss';
import '../index.css';
import image from '../img/profileImage.jpeg';
import heartIcon from '../img/heartIcon.jpeg';
import homeIcon from '../img/homeIcon.png';
import wifiIcon from '../img/wifiIcon.jpeg';
import letterIcon from '../img/letterIcon.jpeg';
import ProfileIcon from './ProfileIcon';

const Menu = () => {
  return (
    <div className="menu">
        <img className="icon" src={homeIcon} alt="home" />
        <img className="icon" src={letterIcon} alt="add" />
        <img className="icon" src={wifiIcon} alt="explore" />
        <img className="icon" src={heartIcon} alt="notificarion" />
        <ProfileIcon iconSize="small" image={image} storyBorder={true} />
    </div>
  )
}

export default Menu