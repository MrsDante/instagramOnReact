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
          comments={commentsOne}
          likedByText="foxy.kiss"
          likedByNumber={897}
          hours={7} />

        <Card 
          accountName="malfoy.mather"
          storyBorder={true}
          image="https://randomfox.ca/images/64.jpg"
          comments={commentsOne}
          likedByText="potter.ass"
          likedByNumber={1735}
          hours={12} />

        <Card 
          accountName="bittle.orange"
          image="https://randomfox.ca/images/94.jpg"
          comments={commentsOne}
          likedByText="foxy.kiss"
          likedByNumber={8967}
          hours={1} />

        <Card 
          accountName="who.is.it"
          storyBorder={true}
          image="https://randomfox.ca/images/82.jpg"
          comments={commentsOne}
          likedByText="no.one_likes_you"
          likedByNumber={8}
          hours={23} />

        <Card 
          accountName="bookish.foxes"
          storyBorder={true}
          image="https://randomfox.ca/images/54.jpg"
          comments={commentsOne}
          likedByText="close_your_mont"
          likedByNumber={45}
          hours={2} />

        <Card 
          accountName="hheheheheheheh"
          image="https://randomfox.ca/images/76.jpg"
          comments={commentsOne}
          likedByText="ron_just_ron"
          likedByNumber={2}
          hours={22} /> 
    </div>
  )
}

export default Cards