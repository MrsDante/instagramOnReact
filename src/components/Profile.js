import React from 'react';
import ProfileIcon from './ProfileIcon';
import users from '../data/users';

const Profile = ({ userName, caption, urlText, iconSize, captionSize, storyBorder, hideAccountName, image }) => {
  
  let accountName = userName ? userName : users[Math.floor(Math.random() * users.length)].username;
  
  return (
    <div className="profile">
      <ProfileIcon iconSize={iconSize} storyBorder={storyBorder} image={image} />
      { (accountName || caption) && !hideAccountName && (
        <div className="text-conteiner">
          <span className="account-name">{accountName}</span>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      <a href="/">{urlText}</a>
    </div>
  )
}

export default Profile