import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo.js'

import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar-container'>

        <div className='nav-bar-logo-container'>
          <Logo />
        </div>

        <nav>
          <h1>B sides</h1>
          <Link to='/'>Home</Link>
          <Link to='/review'>Write a Review</Link>
        </nav>

      </div>
    )
  }
}