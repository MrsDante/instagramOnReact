import React, { useEffect } from 'react';
import classNames from 'classnames';
//import profileImage from '../img/profileImage.jpeg';

const ProfileIcon = (props) => {
  const { iconSize, storyBorder, image } = props;
 
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let randomId = getRandomInt(1, 70);

  let profileImage = image ? image : `https://randomfox.ca/images/${randomId}.jpg`;

  //https://randomfox.ca/images/<id>.jpg

  /*const fetch = async () => {
    const data = await fetch('https://dog.ceo/api/breeds/image/random');
    const response = await data.json();
  }*/
  const classNameForBorder = classNames({
    "story-border": storyBorder,
  })

console.log(storyBorder)
  return (
    <div className={classNameForBorder}>
        <img className={`profileIcon ${iconSize}`} src={profileImage} alt="profile" />
    </div>
  )
}

export default ProfileIcon;

/*
background: linear-gradient(
        200deg,
        #da3394 25%,
        #e03c67 50%,
        #f3753b 75%,
        #f99b4a 100%,
    );
    */