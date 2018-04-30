import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Loading from 'react-loading'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import { fetchCategories, fetchPostByCategory } from '../actions'
import PostList from './PostList'
import CategoryList from './CategoryList'

class App extends Component {

  componentDidMount() {
    this.props.getCategories()
    this.props.getAllPostsByCategory("ALL")
  }

  state = {
    postModalOpen: false,
    commentModalOpen: false,
    loadingPosts: false
  }

  openPostModal = () => {
    this.setState(() => {
      postModalOpen: true
    })
  }

  closePostModal = () => {
    this.setState(() => {
      postModalOpen: false
    })
  }

  openCommentModal = () => {
    this.setState(() => {
      commentModalOpen: true
    })
  }

  closeCommentModal = () => {
    this.setState(() => {
      commentModalOpen: false
    })
  }



  render() {
    const { categories, posts } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src="" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="container">
        {/* Categories */}
        <CategoryList categories={categories} />
        {/* Post */}
        <PostList posts={posts}/>
        <div>
        </div>
        </div>


      </div>
    );
  }
}

function mapStateToProps ({categories, posts}) {
  console.log(posts)
  return {
    categories: categories.categories,
    posts: posts.posts
  }
}


function mapDispatchToProps (dispatch) {
  return {
    getCategories: () => dispatch(fetchCategories()),
    getAllPostsByCategory: (data) => dispatch(fetchPostByCategory(data))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
