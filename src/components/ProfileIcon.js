import React from 'react'
//import profileImage from '../img/profileImage.jpeg';

const ProfileIcon = (props) => {
  const { iconSize, storyBorder, image } = props;
 
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let randomId = getRandomInt(1, 70);

  let profileImage = image ? image : `https://pravatar.cc/150?img=${randomId}`;


  return (
    <div className={storyBorder ? "story-border" : ""}>
        <img className={`profileIcon ${iconSize}`} src={profileImage} alt="profile" />
    </div>
  )
}

export default ProfileIcon