import React, { Component } from 'react'
import axios from 'axios'

import ReplyList from './ReplyList'

import './ReviewPage.css'

export default class ReviewPage extends Component {
  state = {
    artist: '',
    title: '',
    image: '',
    like: false,
    message: '',
    upPlay: 0,
    _id: '',
    replyList: [],
    newReply: '',
  }
  componentDidMount() {
    this.updatePageInfo()
  }
  updatePageInfo = async () => {
    const id = this.props.match.params.reviewId
    const reviewRes = await axios.get(`/api/review/${id}`)
    const replyListRes = await axios.get(`/api/reply/list/${id}`)

    await this.setState(reviewRes.data)
    this.setState({ replyList: replyListRes.data })
  }
  onReplyFormChange = (e) => {
    const newReply = e.target.value
    this.setState({ newReply })
  }
  submitNewReply = async () => {
    const reply = {
      message: this.state.newReply,
      like: false,
      reviewId: this.state._id
    }
    await axios.post('/api/reply', reply)
    this.updatePageInfo()
  }
  deleteReply = async (id) => {
    await axios.delete(`/api/reply/${id}`)
    this.updatePageInfo()
  }
  render() {
    return (
      <div>
        <div className='hero'>

          <img src={this.state.image} alt='album cover' />

          <div className='title-and-artist'>
            <h1 className='review-page-title'>
              {this.state.title}</h1>
            <h3 className='review-page-artist'>
              By <span>{this.state.artist}</span></h3>
          </div>

        </div>

        <div className='review-container'>
          <p>{this.state.message}</p>
        </div>

        <div className='reply-form'>
          <textarea name='newReply' placeholder='write a reply...'
            onChange={this.onReplyFormChange} />
          <button onClick={this.submitNewReply}>Submit</button>
        </div>

        <div className="reply-list">
          {this.state.replyList.map((reply, i) => {
            return <ReplyList
              message={reply.message}
              id={reply._id}
              like={reply.like}
              deleteReply={this.deleteReply}
              key={i} />
          })}
        </div>

      </div>
    )
  }
}