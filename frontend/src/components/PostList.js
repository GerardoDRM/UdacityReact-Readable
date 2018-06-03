import React from 'react'
import moment from 'moment'
function formatDate (date) {
  return moment(date).format("MM/DD/YYYY")
}

export default function PostList({posts, onDelete, onUpdateVote, onPostDetail}) {
  const p = posts !== undefined
    ? posts
    : []

  return (<div>
    {
      p.map((item) => (<li key={item.id}>
        <div className="card">
          <h2>{item.title}</h2>
          <div className="">
            <p>By: {item.author}</p>
            <p>{formatDate(item.timestamp)}</p>
          </div>
          <div className="thumbs">
            <div className="thumbs-up" onClick={() => onUpdateVote(item.id, 'upVote')}></div>
            <p>{item.voteScore}</p>
            <div className="thumbs-down" onClick={() => onUpdateVote(item.id, 'downVote')}></div>
          </div>
          <p>{item.body}</p>
          <div className="card-actions">
            <div onClick={() => onPostDetail(item.id)}>More</div>
            <div onClick={() => onDelete(item.id)}>Delete</div>
          </div>
        </div>
      </li>))
    }
  </div>)
}
