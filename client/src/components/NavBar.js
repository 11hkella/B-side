import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo.js'

import './NavBar.css';

export default class NavBar extends Component {
  state = {
    navBarOut: false,
    newest: false,
    writeReview: false,
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
              <div className='nav-section-container'>
                <h3>Reviews</h3>
                <Link to='/'>Newest</Link>
              </div>
              <div className='nav-section-container'>
                <h3>Create</h3>
                <Link to='/review'>Write a Review</Link>
              </div>
            </nav>

          </div >
          :
          <div className='nav-bar-container nav-bar-resize'>

            <div className='nav-bar-logo-container spinIn'
              onClick={this.toggleNavBar} >
              <Logo />
            </div>

            <nav className='navHide'>
              <div className='nav-section-container'>
                <h3>Reviews</h3>
                <Link to='/'>Newest</Link>
              </div>
              <div className='nav-section-container'>
                <h3>Create</h3>
                <Link to='/review'>Write a Review</Link>
              </div>
            </nav>

          </div>
        }
      </div>
    )
  }
}