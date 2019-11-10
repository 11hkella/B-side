import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import './ReviewForm.css'

export default class ReviewForm extends Component {
  state = {
    newArtist: '',
    newTitle: '',
    newImage: '',
    newMessage: '',
    redirect: false,
  }

  onFormChange = (e) => {
    const previousState = { ...this.state }
    previousState[e.target.name] = e.target.value
    this.setState(previousState)
  }

  submitNewReview = async (e) => {
    e.preventDefault()
    const newReview = {
      artist: this.state.newArtist,
      title: this.state.newTitle,
      image: this.state.newImage,
      like: false,
      message: this.state.newMessage,
      upPlay: 0,
    }
    await axios.post('/api/review', newReview)
    this.setRedirect()
  }

  setRedirect = () => {
    this.setState({ redirect: true })
  }

  render() {
    return (
      <div className='create-review-container'>
        <form id='reviewForm'>
          <div className='hero-preview'>

            <div className='image-input-container'>
              <div className='image-preview'>
                <img src={this.state.newImage}
                  alt='artist or song cover' />
              </div>
              <p>- or -</p>
              <input type='text'
                name='newImage'
                onChange={this.onFormChange}
                placeholder='Image URL' />
            </div>

            <div className='hero-right-preview'>
              <div className='title-input-container'>
                <input type='text'
                  name='newTitle'
                  onChange={this.onFormChange} />
                <label htmlFor='newTitle'
                  className='title-label'>Title</label>
              </div>

              <div className='artist-input-container'>
                <label className='artist-label'
                  htmlFor='newArtist'>Artist</label>
                <span>by</span>
                <input type='text'
                  name='newArtist'
                  onChange={this.onFormChange}
                  className='artist-input' />
              </div>
            </div>

          </div>

          <div className='review-input-container'>
            <label htmlFor='newMessage'>Review...</label>

            <textarea name='newMessage'
              form='reviewForm'
              onChange={this.onFormChange} />
          </div>

          <div className='review-post-container'>
            <span className='review-post'
              onClick={this.submitNewReview}>
              <img src='./images/post_add-24px.svg' alt='post' />
            </span>
          </div>


        </form>

        {this.state.redirect ?
          <Redirect to='/' /> : null}

      </div>
    )
  }
}