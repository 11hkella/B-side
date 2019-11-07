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
            <img src={image} />
          </a>
        </div >

        <div className='review-item-info-container'>
          <h2>{title}</h2>
          <h3>{artist}</h3>
          <p>isLiked: {like ? 'yes' : 'no'}</p>
          <p># upPlays: {upPlay}</p>
        </div>

      </div>
    )
  }
}