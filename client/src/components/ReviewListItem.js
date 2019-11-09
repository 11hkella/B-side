import React, { Component } from 'react'
import StatusBar from './StatusBar.js'
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
          <a href={link}>
            <h2>{title}</h2>
            <h3>{artist}</h3>
          </a>
        </div>

        <div className='icon-container'>

          <StatusBar
            like={like}
            upPlay={upPlay}
            refresh={this.props.refresh}
            id={id} />

        </div>

      </div >
    )
  }
}