import React from 'react'

export default function CategoryList ({categories, categoryUpdate}) {
  const categoryList = categories !== undefined ? categories:[]
  return (
    <div className="left-nav">
    <li>
      <button className="category-nav" onClick={() => categoryUpdate("ALL")}>All</button>
    </li>
    {categoryList.map((c, idx) => (
      <li key={idx}>
        <button className="category-nav" onClick={() => categoryUpdate(c.name)}>{c.name}</button>
      </li>
    ))}
    </div>
  )
}
