import {combineReducers} from 'redux'

function posts(state = {posts:[]}, action) {
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
          if (p.id == updatedPost.id) {
            return updatedPost
          }
          return p
        })]
      }
    case 'UPDATE_VOTE_POST':
      return {
        posts: [...state.posts.map(p => {
          if (p.id == action.postId) {
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

    default:

  }
  return state
}

function comments(state = {}, action) {
  return state
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

const sort = (state = { sort: 'popular' }, action) => {
  switch(action.type) {
    case 'CHANGE_SORT':
      const newValue = action.value
      return {
        ...state,
        sort: newValue
      }
    default:
      return state
  }
}

export default combineReducers({
  posts,
  categories,
  sort
})
