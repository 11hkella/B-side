import React, { Component } from 'react'

import './ReviewListItem.css'

export default class ReviewListItem extends Component {
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
          <h2><a href={link}>{title}</a></h2>
          <h3><a href={link}>{artist}</a></h3>
          <div className='icon-container'>
            <p>isLiked: {like ? 'yes' : 'no'}</p>
            <p># upPlays: {upPlay}</p>
          </div>
        </div>

      </div>
    )
  }
}