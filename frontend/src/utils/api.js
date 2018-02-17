export function fetchCategories() {
  return fetch('http://localhost:3001/categories')
      .then((res) => res.json())
      .then((r) => console.log(e))
}


export function fetchPosts() {
  return fetch('http://localhost:3001/posts')
      .then((res) => res.json())
      .then((r) => console.log(e))
}
