import React, { Component } from 'react'
import axios from 'axios'

import './ReplyForm.css'
export default class ReplyForm extends Component {
  state = {
    newReply: '',
  }

  submitNewReply = async () => {
    const reply = {
      message: this.state.newReply,
      like: false,
      reviewId: this.props.reviewId
    }
    await axios.post('/api/reply', reply)
    this.resetReplyForm()
  }

  resetReplyForm = async () => {
    await this.setState({ newReply: '' })
    this.props.refresh()
  }

  onReplyFormChange = (e) => {
    const newReply = e.target.value
    this.setState({ newReply })
  }

  render() {
    return (
      <div className='reply-form-container'>
        <textarea name='newReply' placeholder='write a reply...'
          onChange={this.onReplyFormChange}
          value={this.state.newReply} />
        <div className='reply-submit-container'
          onClick={this.submitNewReply} >
          <img src='./images/arrow_upward-24px.svg'
            alt='post' />
        </div>
      </div>
    )
  }
}