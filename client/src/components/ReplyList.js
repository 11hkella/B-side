import React, { Component } from 'react'
import axios from 'axios'

export default class ReplyList extends Component {
  sendDeleteInfo = () => {
    this.props.deleteReply(this.props.id)
  }
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
        <button onClick={this.sendDeleteInfo}>Delete</button>
      </div>
    )
  }
}