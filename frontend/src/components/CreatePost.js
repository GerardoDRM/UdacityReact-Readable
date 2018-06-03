import React, { Component } from 'react';

export default function CreatePost({handleSubmit}) {

  return (
    <div>
      <form onSubmit={handleSubmit} className='create-contact-form'>
        <div className='create-contact-details'>
          <input type='text' name='title' placeholder='Title'/>
          <input type='text' name='body' placeholder='Body'/>
          <input type='text' name='author' placeholder='Author'/>
          <input type='text' name='category' placeholder='Category'/>
          <button type="submit">Add Post</button>
        </div>
      </form>
    </div>
  )
}
