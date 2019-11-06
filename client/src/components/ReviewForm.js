import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

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

        {this.state.redirect ?
          <Redirect to='/' /> : null}

      </div>
    )
  }
}