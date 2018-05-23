import React from 'react'

function formatDate (date) {
  return Date(date)
}

export default function PostList({posts, onDelete}) {
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
          <p>{item.body}</p>
          <div className="card-actions">
            <div>More</div>
            <div onClick={() => onDelete(item.id)}>Delete</div>
          </div>
        </div>
      </li>))
    }
  </div>)
}
