import {
  getPost,
  getAllPosts,
  getAllPostsByCategory,
  getAllCategories,
  addPostAPI,
  deletePostAPI,
  updatePostAPI,
  votePost,
  getComments,
  // editPost,
  // addComment,
  // deleteComment,
  // editComment,
  // voteComment
} from '../utils/api'

const GET_POSTS = 'GET_POSTS'
const GET_POST = 'GET_POST'
const GET_CATEGORIES = 'GET_CATEGORIES'
const GET_POST_CATEGORY = 'GET_POST_CATEGORY'
const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'
const DELETE_POST = 'DELETE_POST'
const UPDATE_VOTE_POST = 'UPDATE_VOTE_POST'
// const CHANGE_SORT = 'CHANGE_SORT'
// const ADD_COMMENT = 'ADD_COMMENT'
// const DELETE_COMMENT = 'DELETE_COMMENT'
// const EDIT_COMMENT = 'EDIT_COMMENT'


// Getting all categories
export const fetchCategories = () => dispatch => (
  getAllCategories()
    .then(categories => dispatch({
        type: GET_CATEGORIES,
        categories
    }))
)

// Getting all post by category or not
export const fetchPostByCategory = (category) => dispatch => {
  if(category === "ALL") {
    getAllPosts()
      .then(posts => {
        dispatch({
          type: GET_POSTS,
          posts
        })
      })
  } else {
    getAllPostsByCategory(category)
      .then(posts => {
        dispatch({
          type: GET_POST_CATEGORY,
          posts
        })
      })
  }
}

// Getting post details with comments
export const fetchPost = (id) => dispatch => (
  getPost(id)
    .then(post => {
      getComments(post.id)
        .then(comments => {
          dispatch({
            type: GET_POST,
            post,
            comments
          })
        })
    })
)

// Create a new post
export const addPost = (post) => dispatch => (
  addPostAPI(post)
    .then(post => {
      dispatch({
        type: ADD_POST,
        post
      })
    })
)

// Update a post
export const updatePost = (post) => dispatch => (
  updatePostAPI(post.id, post)
    .then((post) => {
      dispatch({
        type: UPDATE_POST,
        post
      })
    })
)

// Delete post
export const deletePost = (id) => dispatch => (
  deletePostAPI(id)
    .then(() => {
      dispatch({
        type: DELETE_POST,
        id
      })
    })
)

// Update Vote post score
export const updateVotePost = (id, type) => dispatch => (
  votePost(id, type)
    .then((post) => {
      dispatch({
        type: UPDATE_VOTE_POST,
        voteScore: post.voteScore,
        postId: id
      })
    })
)

// export const changeSortAction = (value) => {
//   return {
//     type: CHANGE_SORT,
//     value: value
//   }
// }
//
// export const addCommentAction = (comment) => dispatch => {
//   return addComment(comment)
//     .then(comment => {
//       dispatch({
//         type: ADD_COMMENT,
//         comment
//       })
//     })
// }
//
// export const deleteCommentAction = (id) => dispatch => {
//   return deleteComment(id)
//     .then(() => {
//       dispatch({
//         type: DELETE_COMMENT,
//         id
//       })
//     })
// }
//
// export const editCommentAction = (id, comment) => dispatch => {
//   return editComment(id, comment)
//     .then((comment) => {
//       dispatch({
//         type: EDIT_COMMENT,
//         id,
//         comment
//       })
//     })
// }
//
//
// export const downVoteCommentAction = (id) => dispatch => (
//   voteComment(id, "downVote")
//     .then((comment) => {
//       dispatch({
//         type: DOWNVOTE_COMMENT,
//         id: comment.id,
//         parentId: comment.parentId,
//         voteScore: comment.voteScore
//       })
//     })
// )
