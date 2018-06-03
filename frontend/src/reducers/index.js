import {combineReducers} from 'redux'

function posts(state = {posts:[], sort: 'popular'}, action) {
  switch (action.type) {
    case 'GET_POST':
        return {
          ...state,
          post: {...action.post, "comments": action.comments}
        }
    case 'GET_POSTS':
      return {
        posts: action.posts
      }
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.post]
      }

    case 'DELETE_POST':
      return {
        posts: [...state.posts.filter(p => p.id != action.id)]
      }
    case 'UPDATE_POST':
      let updatedPost = action.post
      return {
        posts: [...state.posts.map(p => {
          if (p.id === updatedPost.id) {
            return updatedPost
          }
          return p
        })]
      }
    case 'UPDATE_VOTE_POST':
      return {
        posts: [...state.posts.map(p => {
          if (p.id === action.postId) {
            p.voteScore = action.voteScore
          }
          return p
        })]
      }
    case 'GET_POST_CATEGORY':
      return {
        ...state,
        posts: action.posts
      }
    case 'UPDATE_VOTE_COMMENT':
      const post = {...state.post, "comments": state.post.comments.map(c => {
        if (c.id === action.id) {
          c.voteScore = action.voteScore
        }
        return c
      })}
      return {
        ...state,
        post: post
      }
    case 'DELETE_COMMENT':
      return {
        ...state,
        post: {...state.post, "comments": state.post.comments.filter(c => c.id != action.id)}
      }
    case 'CHANGE_SORT':
      if (action.value === 'popular') {
        return {
          ...state,
          posts: [...state.posts.sort((a, b) => b['voteScore'] - a['voteScore'])]
        }
      } else if (action.value === 'time') {
        return {
          ...state,
          posts: [...state.posts.sort((a, b) => a['timestamp'] - b['timestamp'])]
        }
      }
      return state
  }
  return state
}

function comments(state = {}, action) {
  // switch (action.type) {
  //   case 'UPDATE_VOTE_COMMENT':
  //     console.log(state)
  //     return []
  //   default:
  //     return state
  //
  // }
}

// For Categories
const categories = (state = {categories:[]}, action) => {
  switch(action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.categories
      }
    default:
      return state
  }
}

export default combineReducers({
  posts,
  categories
})
