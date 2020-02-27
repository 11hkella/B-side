import React, { Component } from 'react'
import axios from 'axios'

import ReviewListItem from './ReviewListItem';
import Header from './Header.js'


import './Home.css';

export default class Home extends Component {
    state = {
        reviewList: [],
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