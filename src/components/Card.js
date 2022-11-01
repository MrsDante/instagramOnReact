import React from 'react';
import Profile from './Profile';
import dots from '../img/dots.png';
import CardMenu from './CardMenu';
import Comment from './Comment';
import CardButton from './CardButton';


const Card = ({ storyBorder, image, comments, likedByText, likedByNumber, hours }) => {
  return (
    <div className="card">
        <header>
            <Profile iconSize="medium" storyBorder={storyBorder} />
            <img src={dots} alt="img" />
        </header>
        <img className="card-image" src={image} alt="image" />
        <CardMenu />
        <div className="liked-by">
            <Profile iconSize="small" hideAccountName={true} />
            <span>
                Нравится <strong>{likedByText}</strong> и{' '}<strong>{likedByNumber} другим</strong>
            </span>
        </div>
        <div className="comments">
          {comments.map((comment) => {
            return (
                <Comment key={comment.id}
                accountName={comment.user}
                comment={comment.text} />
            )
          })}
        </div>
        <div className="time-posted">{hours} ЧАСОВ НАЗАД</div>
        <div className="add-comment">
            <div className="comment-text">Добавить комментарий...</div>
            <div className="post-text">ОПУБЛИКОВАТЬ</div>
        </div>
    </div>
  )
}

export default Card