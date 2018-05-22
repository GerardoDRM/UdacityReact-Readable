const api = 'http://localhost:3001'

// Get token from localStorage
let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// GET /categories
export const getAllCategories= () =>  {
  return fetch(`${api}/categories`, { headers })
      .then((res) => res.json())
      .then((r) => r.categories)
}

// GET posts
export const getAllPosts= () =>  {
  return fetch(`${api}/posts`, { headers })
      .then((res) => res.json())
      .then((r) => r)
}

// GET post
export const getPost= (id) => {
  return fetch(`${api}/posts/${id}`, { headers })
      .then((res) => res.json())
}

// GET /category/posts
export const getAllPostsByCategory = (category) => {
  return fetch(`${api}/${category}/posts`, { headers })
      .then((res) => res.json())
      .then((r) => r)
}

// POST /posts
export const addPostAPI = (post) => {
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(data => data.json())
}

// PUT /posts/:id
export const updatePostAPI = (id, post) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(data => data.json())
}

// GET /posts/:id
export const getPostById = (id) => {
  return fetch(`${api}/posts/${id}`, { headers })
    .then(response => response.json())
}


// POST /posts/:id
export const votePost = (id, option) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: option
    })
  })
  .then(data => data.json())
}

// DELETE /posts/:id
export const deletePostAPI = (id) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers
  })
}

// GET /posts/:id/comments
export const getComments = (id) => {
  return fetch(`${api}/posts/${id}/comments`, { headers })
    .then(response => response.json())
}

// POST /comments
export const addCommentAPI = (comment) => {
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
  .then(data => data.json())
}

// DELETE /comments/:id
export const deleteCommentAPI = (id) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers
  })
  .then(data => data.json())
}

// PUT /comments/:id
export const updateCommentAPI = (id, comment) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
  .then(data => data.json())
}

// POST /comments/:id
export const voteCommentAPI = (id, option) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: option
    })
  })
  .then(data => data.json())
}
