import React, { Component } from 'react'
import axios from 'axios'

export default class ReviewForm extends Component {
  state = {
    newArtist: '',
    newTitle: '',
    newImage: '',
    newMessage: '',
  }
  onFormChange = (e) => {
    const previousState = { ...this.state }
    previousState[e.target.name] = e.target.value
    this.setState(previousState)
  }
  submitNewReview = async () => {
    const newReview = {
      artist: this.state.newArtist,
      title: this.state.newTitle,
      image: this.state.newImage,
      like: false,
      message: this.state.newMessage,
      upPlay: 0,
    }
    const created = await axios.post('/api/review', newReview)
    this.renderReviewList()
  }
  render() {
    return (
      <div>
        <form id='reviewForm'
          onSubmit={this.submitNewReview}>

          <input type='text'
            name='newArtist'
            onChange={this.onFormChange}
            placeholder='artist' />

          <input type='text'
            name='newTitle'
            onChange={this.onFormChange}
            placeholder='album or song title' />

          <input type='text'
            name='newImage'
            onChange={this.onFormChange}
            placeholder='image url' />

          <textarea name='newMessage'
            form='reviewForm'
            onChange={this.onFormChange}
            placeholder='review...' />

          <input type='submit' />

        </form>

      </div>
    )
  }
}