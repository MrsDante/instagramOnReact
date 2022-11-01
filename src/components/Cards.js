import React from 'react';
import Card from './Card';
import Stories from './Stories';

const Cards = () => {
  const commentsOne = [
    {
      user: 'hussss.hushhh',
      text: 'Oh my.....',
      id: 1,
    },
    {
        user: 'like.you.not',
        text: 'Thanks for sharing',
        id: 2,
      },
      {
        user: 'not.my.propblem',
        text: 'Is it for real???',
        id: 3,
      },
      {
        user: 'snegg',
        text: 'Just , dont, do, it ........',
        id: 4,
      },
      {
        user: 'books.fox',
        text: 'Its fantastic!!!',
        id: 5,
      },
      {
        user: 'follow.fox',
        text: 'Follow me',
        id: 6,
      },
      {
        user: 'spammer.fox',
        text: 'Hello! Im from  your banc-account!',
        id: 7,
      },
      {
        user: 'wont.tell.anything',
        text: '......',
        id: 8,
      },
  ]
  return (
    <div className="cards">
        <Stories />
        
        <Card 
          accountName="hussss.hushhh"
          storyBorder={true}
          image="https://randomfox.ca/images/34.jpg"
          comments={commentsOne} />
    </div>
  )
}

export default Cards