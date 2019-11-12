import React, { Component } from 'react'
import axios from 'axios'

import './ReplyList.css'

export default class ReplyList extends Component {
  deleteReply = async () => {
    await axios.delete(`/api/reply/${this.props.id}`)
    this.props.refresh()
  }
  render() {
    return (
      <div className='single-reply'>
        <p>{this.props.message}</p>
        <img src='./images/clear-24px.svg' alt='delete'
          onClick={this.deleteReply} />
      </div>
    )
  }
}