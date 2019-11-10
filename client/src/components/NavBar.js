import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo.js'

import './NavBar.css';

export default class NavBar extends Component {
  state = {
    navBarOut: false,
  }
  toggleNavBar = () => {
    this.setState({ navBarOut: !this.state.navBarOut })
  }
  render() {
    return (
      <div>
        {this.state.navBarOut ?
          <div className='nav-bar-container'>

            < div className='nav-bar-logo-container spinOut'
              onClick={this.toggleNavBar} >
              <Logo />
            </div >

            <nav className='navShow'>
              <h1>B sides</h1>
              <Link to='/'>Home</Link>
              <Link to='/review'>Write a Review</Link>
            </nav>

          </div >
          :
          <div className='nav-bar-container nav-bar-resize'>

            <div className='nav-bar-logo-container spinIn'
              onClick={this.toggleNavBar} >
              <Logo />
            </div>

            <nav className='navHide'>
              <h1>B sides</h1>
              <Link to='/'>Home</Link>
              <Link to='/review'>Write a Review</Link>
            </nav>

          </div>
        }
      </div>
    )
  }
}