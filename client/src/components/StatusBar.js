import React, { Component } from 'react'
import axios from 'axios'

import './StatusBar.css'

export default class StatusBar extends Component {
  deleteReview = async () => {
    await axios.delete(`/api/review/${this.props.id}`)
    this.props.refresh()
  }
  favoriteReview = async () => {
    await axios.put(`/api/review/${this.props.id}`, { like: true })
    this.props.refresh()
  }
  unfavoriteReview = async () => {
    await axios.put(`/api/review/${this.props.id}`, { like: false })
    this.props.refresh()
  }
  addUpPlay = async () => {
    await axios.put(`/api/review/${this.props.id}`,
      { upPlay: this.props.upPlay + 1 })
    this.props.refresh()
  }
  render() {
    const { like,
      upPlay, } = this.props
    return (
      <div className="status-bar">
        {like ?
          <img onClick={this.unfavoriteReview}
            src='/images/favorite-24px.svg' alt='favorite'
            className='icon favorite' />
          :
          <img onClick={this.favoriteReview}
            src='/images/favorite_border-24px.svg' alt='unfavorite'
            className='icon unfavorite' />
        }
        <p>
          <span>{upPlay}</span>
          <img onClick={this.addUpPlay}
            src='/images/radio-24px.svg' alt='up play' />
        </p>

        <img onClick={this.deleteReview}
          src='/images/clear-24px.svg' alt='clear'
          className='icon delete' />
      </div>
    )
  }
}