import {combineReducers} from 'redux'

function posts(state = {}, action) {
  // switch (action.type) {
  //   case ADD_RECIPE:
  //     const {recipe} = action
  //     return {
  //       ...state,
  //       [recipe.label] : recipe
  //     }
  //   default:
  //     return state
  // }
  return state
}

function comments(state = {}, action) {
  return state
}

export default combineReducers({posts, comments})
