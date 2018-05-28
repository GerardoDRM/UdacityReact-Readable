// {
//   "id": "8tu4bsun805n8un48ve89",
//   "parentId": "8xf0y6ziyjabvozdd253nd",
//   "timestamp": 1469479767190,
//   "body": "Comments. Are. Cool.",
//   "author": "thingone",
//   "voteScore": -5,
//   "deleted": false,
//   "parentDeleted": false
// }
import React, {Component} from 'react';

function formatDate (date) {
  return Date(date)
}

export default function Comment({comment, onUpdateVote}) {
  const commentId = comment.id

  return (<div>
    <div className="">
      <p>By: {comment.author}</p>
      <p>{formatDate(comment.timestamp)}</p>
    </div>
    <div className="thumbs">
    <div className="thumbs-up" onClick={() => onUpdateVote(comment.id, 'upVote')}></div>
      <p>{comment.voteScore}</p>
      <div className="thumbs-down" onClick={() => onUpdateVote(comment.id, 'downVote')}></div>
    </div>
    <p>{comment.body}</p>
    <div className="card-actions">
    </div>

  </div>)
}
