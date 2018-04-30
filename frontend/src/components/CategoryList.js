import React from 'react'

export default function CategoryList ({categories}) {
  const categoryList = categories !== undefined ? categories:[]
  return (
    <div className="left-nav">
    {categoryList.map((c, idx) => (
      <li key={idx}>
        <a to={`/${c.path}`}>{c.name}</a>
      </li>
    ))}
    </div>
  )
}
