import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux'
import Loading from 'react-loading'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import {fetchCategories, fetchPostByCategory, fetchPost, addPost, updatePost, deletePost, updateVotePost} from '../actions'
import PostList from './PostList'
import CategoryList from './CategoryList'

class App extends Component {

  componentDidMount() {
    this.props.getCategories()
    this.props.getAllPostsByCategory("ALL")
    this.props.getPostDetails("6ni6ok3ym7mf1p33lnez")
  }

  state = {
    postModalOpen: false,
    commentModalOpen: false,
    loadingPosts: false
  }

  guid = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }


  openPostModal = () => {
    this.setState(() => {
      postModalOpen : true
    })
  }

  closePostModal = () => {
    this.setState(() => {
      postModalOpen : false
    })
  }

  openCommentModal = () => {
    this.setState(() => {
      commentModalOpen : true
    })
  }

  closeCommentModal = () => {
    this.setState(() => {
      commentModalOpen : false
    })
  }

  createPost = () => {
    this.props.addPost({
      "id": this.guid(),
      "timestamp": 1468479767190,
      "title": "Learn Redux in 100 minutes!",
      "body": "Just kidding. It takes more than 10 minutes to learn technology.",
      "author": "thingone",
      "category": "redux",
      "voteScore": 0,
      "deleted": false,
      "commentCount": 0
    })
  }

  updatePost = () => {
    this.props.updatePost({"id": "6ni6ok3ym7mf1p33lnez", "author": "Lucas"})
  }

  deletePost = () => {
    this.props.deletePost("8xf0y6ziyjabvozdd253nd")
  }

  updateVote = () => {
    this.props.voteOnPost("8xf0y6ziyjabvozdd253nd", "upVote")
  }

  render() {
    const {categories, posts} = this.props

    return (<div className="App">
      <header className="App-header">
        <img src="" className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="container">
        {/* Categories */}
        <CategoryList categories={categories}/> {/* Post */}
        <PostList posts={posts}/>
        <div></div>

        <button onClick={this.updateVote}>TEST</button>
      </div>

    </div>);
  }
}

function mapStateToProps({categories, posts, post}) {
  return {categories: categories.categories, posts: posts.posts, post: post}
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(fetchCategories()),
    getAllPostsByCategory: (category) => dispatch(fetchPostByCategory(category)),
    getPostDetails: (post_id) => dispatch(fetchPost(post_id)),
    addPost: (post) => dispatch(addPost(post)),
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (id) => dispatch(deletePost(id)),
    voteOnPost: (id, type) => dispatch(updateVotePost(id, type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
