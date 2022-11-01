import React from 'react';
import Sticky from 'react-sticky-el';
import Profile from './Profile';
import Suggestions from './Suggestions';
import Footer from './Footer';
import profileImage from '../img/profileImage.jpeg';

const Sidebar = () => {
  return (
      <Sticky topOffset={-80}>
        <div className="sidebar">
            <Profile 
              username="blondy.fox" 
              caption="Margaret Snape" 
              urlText="Switch" 
              iconSize="big" 
              image={profileImage} />
            <Suggestions />
            <Footer />
        </div>
      </Sticky>
  )
}

export default Sidebar