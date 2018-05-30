import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux'
import Loading from 'react-loading'
import Modal from 'react-modal'
import {fetchCategories, fetchPostByCategory, fetchPost, addPost,
  updatePost, deletePost, updateVotePost, addComment, updateComment,
  deleteComment, voteComment, changeSortAction} from '../actions'
import PostList from './PostList'
import CategoryList from './CategoryList'
import serializeForm from 'form-serialize'
import CreatePost from './CreatePost'
import PostDetails from './PostDetails'

class App extends Component {

  componentDidMount() {
    this.props.getCategories()
    this.props.getAllPostsByCategory("ALL")
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.post) {
      this.setState(() => ({
        postModalOpen : true,
        selectedPostComments: nextProps.post.comments
      }))
    }
  }

  state = {
    postModalOpen: false,
    postModalCreate: false,
    commentModalOpen: false,
    loadingPosts: false,
    selectedPostComments: [],
    sortValue: 'popular'
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

  sortPost = (e) => {
    this.setState({sortValue: e.target.value}, this.props.changeSort(this.state.sortValue));
  }

  openPostCreateModal = () => {
    this.setState(() => ({
      postModalCreate : true
    }))
  }

  closePostCreateModal = () => {
    this.setState(() => {
      postModalCreate : false
    })
  }


  openPostModal = (id) => {
    // Get post details
    this.props.getPostDetails(id)
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
    this.props.updatePost({"id": "8xf0y6ziyjabvozdd253nd", "author": "Lucas"})
  }

  deletePost = (id) => {
    this.props.deletePost(id)
  }

  updateVote = (id, type) => {
    this.props.voteOnPost(id, type)
  }

  createComment = () => {
    this.props.addComment({
      "id": this.guid(),
      "parentId": "8xf0y6ziyjabvozdd253nd",
      "timestamp": 1468166872634,
      "body": "LOL.",
      "author": "thingtwo",
      "voteScore": 0,
      "deleted": false,
      "parentDeleted": false
    })
  }
  updateComment = () => {
    this.props.updatePost({"id": "894tuq4ut84ut8v4t8wun89g", "body": "Lucas"})
  }
  deleteComment = (id) => {
    this.props.deleteComment(id)
  }
  updateVoteComment = (id, type) => {
    this.props.voteComment(id, type)
  }

  changeByCategory = (category) => {
    this.props.getAllPostsByCategory(category)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if (this.props.onCreateContact)
      this.props.onCreateContact(values)
  }

  render() {
    const {categories, posts} = this.props
    const { postModalOpen, postModalCreate, selectedPostComments } = this.state


    return (<div className="App">
      <header className="App-header">
        <img src="" className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
        <div className="add-btn" onClick={() => this.openPostCreateModal()}></div>
      </header>
      <div className="container">
        <select id="lang" onChange={this.sortPost} value={this.state.sortValue}>
          <option value="popular">Popular</option>
          <option value="time">Time</option>
        </select>
        {/* Categories */}
        <CategoryList categories={categories} categoryUpdate={this.changeByCategory} /> {/* Post */}
        <PostList posts={posts} onDelete={this.deletePost} onUpdateVote={this.updateVote} onPostDetail={this.openPostModal}/>
        <div></div>

        <button onClick={this.updateVoteComment}>TEST</button>
      </div>


      {/* Detail Post */}
      <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={postModalOpen}
          onRequestClose={this.closePostModal}
          contentLabel='Modal'
        >
        <PostDetails comments={selectedPostComments} onUpdateVote={this.updateVoteComment} onDelete={this.deleteComment}/>
        </Modal>


      {/* Post Form */}
      <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={postModalCreate}
          onRequestClose={this.closePostCreateModal}
          contentLabel='Modal'
        >
        <CreatePost handleSubmit={this.handleSubmit}/>
        </Modal>

      {/* Comment Form */}

    </div>);
  }
}

function mapStateToProps({categories, posts, post}) {
  return {categories: categories.categories, posts: posts.posts, post: posts.post}
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(fetchCategories()),
    getAllPostsByCategory: (category) => dispatch(fetchPostByCategory(category)),
    getPostDetails: (post_id) => dispatch(fetchPost(post_id)),
    addPost: (post) => dispatch(addPost(post)),
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (id) => dispatch(deletePost(id)),
    voteOnPost: (id, type) => dispatch(updateVotePost(id, type)),
    addComment: (id, comment) => dispatch(addComment(id, comment)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    voteComment: (id, type) => dispatch(voteComment(id, type)),
    changeSort: (type) => dispatch(changeSortAction(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
