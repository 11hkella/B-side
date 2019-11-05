const express = require('express')

const reviewApi = require('../models/review.js')

const reviewRouter = express.Router()

// get all
reviewRouter.get('/', async (req, res) => {
  const allReviews = await reviewApi.getAllReviews()
  return res.json(allReviews)
})

//create 
reviewRouter.post('/', async (req, res) => {
  const created = await reviewApi.createReview(req.body)
  return res.json(created)
})

//update
reviewRouter.put('/:reviewId', async (req, res) => {
  const updated = await reviewApi.updateReview(req.params.reviewId, req.body)
  return res.json(updated)
})

//delete
reviewRouter.get('/:reviewId', async (req, res) => {
  const deleted = await reviewApi.deleteReview(req.params.reviewId)
  return res.json(deleted)
})

// get one
reviewRouter.get('/:reviewId', async (req, res) => {
  const review = await reviewApi.getOneReview(req.params.reviewId)
  return res.json(review)
})

module.exports = {
  reviewRouter
}
