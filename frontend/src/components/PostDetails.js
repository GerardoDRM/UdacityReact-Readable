import React, { Component } from 'react';
import Comment from './Comment'

export default function PostDetails({comments, onUpdateVote}) {
  return (
    <div>
      {
        comments.map((item) => (<Comment comment={item} key={item.id} onUpdateVote={onUpdateVote}/>))
      }
    </div>
  )
}
