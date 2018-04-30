import React from 'react'

function formatDate (date) {
  return Date(date)
}

export default function PostList({posts}) {
  const p = posts !== undefined && posts[0] !== undefined
    ? posts[0]
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
        </div>
      </li>))
    }
  </div>)
}
