import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ReplyList from './ReplyList.js'
import StatusBar from './StatusBar.js'
import ReplyForm from './ReplyForm.js'

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

  render() {
    return (
      <div className='single-review-container'>
        <div className='hero'>

          <div className='image-container'>
            <Link to='/'>
              <img src={this.state.image} alt='album cover' />
            </Link>
          </div>

          <div className='title-and-artist'>
            <h1 className='review-page-title'>
              {this.state.title}</h1>
            <h3 className='review-page-artist'>
              By <span>{this.state.artist}</span></h3>
            <div className='status-bar-container'>
              <StatusBar
                like={this.state.like}
                upPlay={this.state.upPlay}
                refresh={this.updatePageInfo}
                id={this.state._id} />
            </div>
          </div>

        </div>

        <div className='review-container'>
          <p>{this.state.message}</p>
        </div>

        <div className="reply-list">
          {this.state.replyList.map((reply, i) => {
            return <ReplyList
              message={reply.message}
              id={reply._id}
              like={reply.like}
              refresh={this.updatePageInfo}
              key={i} />
          })}
        </div>

        <div className='reply-form'>
          <ReplyForm
            reviewId={this.state._id}
            refresh={this.updatePageInfo} />
        </div>

      </div>
    )
  }
}