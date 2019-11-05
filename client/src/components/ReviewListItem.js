import React, { Component } from 'react'

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
      <div>
        <div>
          <a href={link}>
            <img src={image} />
          </a>
        </div>
        <h2>{title}</h2>
        <h3>{artist}</h3>
        <div>
          <p>isLiked: {like ? 'yes' : 'no'}</p>
          <p># upPlays: {upPlay}</p>
        </div>
      </div>
    )
  }
}