import React from 'react';
import Profile from './Profile';

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="title-container">
        <div className="title">Ваши рекомендации</div>
        <a href="/">Посмотреть все</a>
      </div>
      <Profile 
        caption="Подписаны My_father_will_know и eще 3"
        urlText="Подписаться"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
       />
             <Profile 
        caption="Подписаны My_father_will_know и eще 3"
        urlText="Подписаться"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
       />
             <Profile 
        caption="Подписаны Dog и eще 7"
        urlText="Подписаться"
        iconSize="medium"
        captionSize="small"
       />
             <Profile 
        caption="Подписаны Eleven и eще 1"
        urlText="Подписаться"
        iconSize="medium"
        captionSize="small"
       />
             <Profile 
        caption="Подписаны Guffy и eще 9"
        urlText="Подписаться"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
       />
    </div>
  )
}

export default Suggestions