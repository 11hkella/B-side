import React, { Component } from 'react'
import axios from 'axios'

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
    this.setState(replyListRes.data)
  }

  render() {
    return (
      <div>
        <header>
          <h1>{this.state.title}</h1>
          <h3>{this.state.artist}</h3>
        </header>
        <div>
          <p>{this.state.message}</p>
        </div>
        <div>
          <textarea name='newReply' placeholder='write a reply...' />
          <button>Submit</button>
        </div>
      </div>
    )
  }
}