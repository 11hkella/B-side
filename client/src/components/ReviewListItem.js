import React, { Component } from 'react'

import './ReviewListItem.css'
import axios from 'axios'

export default class ReviewListItem extends Component {
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
  render() {
    const { artist,
      title,
      image,
      like,
      upPlay,
      id, } = this.props
    const link = `/${id}`
    return (
      <div className='review-item-container'>

        <div className='review-pic-container'>
          <a href={link}>
            <img className='list-pic' src={image} alt="artist or song" />
          </a>
        </div >

        <div className='review-item-info-container'>
          <a href={link}>
            <h2>{title}</h2>
            <h3>{artist}</h3>
          </a>
        </div>

        <div className='icon-container'>

          {like ?
            <img onClick={this.unfavoriteReview}
              src='/images/favorite-24px.svg' alt='favorite'
              className='icon favorite' />
            :
            <img onClick={this.favoriteReview}
              src='/images/favorite_border-24px.svg' alt='unfavorite'
              className='icon unfavorite' />
          }

          <img src='/images/clear-24px.svg' alt='up play' />

          <img onClick={this.deleteReview}
            src='/images/clear-24px.svg' alt='clear'
            className='icon delete' />

        </div>

      </div >
    )
  }
}