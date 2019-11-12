import React, { Component } from 'react'
import axios from 'axios'

import ReviewListItem from './ReviewListItem';
import Header from './Header.js'


import './Home.css';

export default class Home extends Component {
    state = {
        toggleForm: true,
        reviewList: [],
        newArtist: '',
        newTitle: '',
        newImage: '',
        newMessage: '',
    }
    componentDidMount() {
        this.renderReviewList()
        return;
    }
    renderReviewList = async () => {
        const res = await axios.get('/api/review')
        this.setState({ reviewList: res.data })
        return;
    }
    onFormChange = (e) => {
        const previousState = { ...this.state }
        previousState[e.target.name] = e.target.value
        this.setState(previousState)
    }
    submitNewReview = async () => {
        const newReview = {
            artist: this.state.newArtist,
            title: this.state.newTitle,
            image: this.state.newImage,
            like: false,
            message: this.state.newMessage,
            upPlay: 0,
        }
        await axios.post('/api/review', newReview)
        this.renderReviewList()
    }
    toggleFormClick = () => {
        this.setState({ toggleForm: !this.state.toggleForm })
    }
    render() {
        return (
            <div className='home-container'>
                <Header />
                <div className='review-List'>
                    {this.state.reviewList.map((review, i) => {
                        return <ReviewListItem
                            artist={review.artist}
                            title={review.title}
                            image={review.image}
                            like={review.like}
                            upPlay={review.upPlay}
                            id={review._id}
                            refresh={this.renderReviewList}
                            key={i} />
                    })}
                </div>
            </div>
        )
    }
}