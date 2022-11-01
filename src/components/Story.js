import React from 'react';
import users from '../data/users';
import Profile from './Profile';
import ProfileIcon from './ProfileIcon';

const Story = () => {
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + '...';
  }
  return (
    <div className="story">
        <ProfileIcon iconSize="big" storyBorder={true} />
        <span className="account-name">{accountName}</span>
    </div>
  )
}

export default Story