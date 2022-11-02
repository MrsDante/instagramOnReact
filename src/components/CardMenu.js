import React from 'react';
import notify from '../img/addIcon.png';
import comments from '../img/comments.png';
import inbox from '../img/inbox.png';
import bookmark from '../img/bookmark.png';

const CardMenu = () => {
  return (
    <div className="card-menu">
      <div className="interactions">
        <img className="icon" src={notify} />
        <img className="icon" src={comments} />
        <img className="icon" src={inbox} />
      </div>
      <img className="icon" src={bookmark} />
    </div>
  )
}

export default CardMenu