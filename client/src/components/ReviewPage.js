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
  }
  componentDidMount() {
    this.updatePageInfo()
  }
  updatePageInfo = async () => {
    const id = this.props.match.params.reviewId
    const reviewRes = await axios.get(`/api/review/${id}`)
    const replyListRes = await axios.get(`/api/reply/list/${id}`)
    this.setState(reviewRes.data)
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}