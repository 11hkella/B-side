import React, { Component } from 'react'
import axios from 'axios'

import ReviewListItem from './ReviewListItem';

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
        const created = await axios.post('/api/review', newReview)
        this.renderReviewList()
    }
    toggleFormClick = () => {
        this.setState({ toggleForm: !this.state.toggleForm })
    }
    render() {
        return (
            <div>
                <header>
                    <h1>B Side</h1>
                </header>

                {this.state.toggleForm
                    ?
                    <button onClick={this.toggleFormClick}>Write Review</button>
                    :
                    <div>
                        <button onClick={this.toggleFormClick}>Hide</button>
                        <form id='reviewForm' onSubmit={this.submitNewReview}>
                            <input type='text' name='newArtist'
                                onChange={this.onFormChange} placeholder='artist' />
                            <input type='text' name='newTitle'
                                onChange={this.onFormChange} placeholder='album or song title' />
                            <input type='text' name='newImage'
                                onChange={this.onFormChange} placeholder='image url' />
                            <input type='submit' />
                        </form>
                        <textarea name='newMessage' form='reviewForm'
                            onChange={this.onFormChange} placeholder='review...' />
                    </div>
                }

                {this.state.reviewList.map((review, i) => {
                    return <ReviewListItem
                        artist={review.artist}
                        title={review.title}
                        image={review.image}
                        like={review.like}
                        upPlay={review.upPlay}
                        id={review._id}
                        key={i} />
                })}
            </div>
        )
    }
}