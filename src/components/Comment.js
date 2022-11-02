import React from 'react'

const Comment = ({ accountName, comment }) => {
  return (
    <div className="comment-container">
      <div className="account-name">
        {accountName}
      </div>
      <div className="comment">{comment}</div>
    </div>
  )
}

export default Comment