import React, { Component } from 'react';
import Comment from './Comment'

export default function PostDetails({comments, onUpdateVote, onDelete}) {
  return (
    <div>
      {
        comments.map((item) => (<Comment comment={item} key={item.id} onUpdateVote={onUpdateVote} onDelete={onDelete}/>))
      }
    </div>
  )
}
