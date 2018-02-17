import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Loading from 'react-loading'
import Modal from 'react-modal'

class App extends Component {

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
    return (
      <div className="App">
        <header className="App-header">
          <img src="" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
        {/* Categories */}
        <div>
        </div>
        {/* Post */}
        <div>
        </div>
        </div>


      </div>
    );
  }
}

function mapStateToProps () {

  return {
  }
}


function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
