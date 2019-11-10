import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
          <Link to={link}>
            <img className='list-pic' src={image} alt="artist or song" />
          </Link>
        </div >

        <div className='review-item-info-container'>
          <Link to={link}>
            <h2>{title}</h2>
            <h3>{artist}</h3>
          </Link>
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