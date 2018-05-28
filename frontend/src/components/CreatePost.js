import React, { Component } from 'react';

export default function CreatePost({handleSubmit}) {

  return (
    <div>
      <form onSubmit={() => handleSubmit()} className='create-contact-form'>
        <div className='create-contact-details'>
          <input type='text' name='name' placeholder='Name'/>
          <input type='text' name='email' placeholder='Email'/>
          <button>Add Post</button>
        </div>
      </form>
    </div>
  )
}
