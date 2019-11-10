import React, { Component } from 'react'
import axios from 'axios'



export default class ReplyList extends Component {
  deleteReply = async () => {
    await axios.delete(`/api/reply/${this.props.id}`)
    this.props.refresh()
  }
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
        <button onClick={this.deleteReply}>Delete</button>
      </div>
    )
  }
}