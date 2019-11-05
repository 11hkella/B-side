const express = require('express')

const replyApi = require('../models/reply.js')

const replyRouter = express.Router()

// get all
replyRouter.get('/', async (req, res) => {
  const allreplies = await replyApi.getAllReplies()
  return res.json(allreplies)
})

//create 
replyRouter.post('/', async (req, res) => {
  const created = await replyApi.createReply(req.body)
  return res.json(created)
})

//update
replyRouter.put('/:replyId', async (req, res) => {
  const updated = await replyApi.updateReply(req.params.replyId, req.body)
  return res.json(updated)
})

//delete
replyRouter.get('/:replyId', async (req, res) => {
  const deleted = await replyApi.deleteReply(req.params.replyId)
  return res.json(deleted)
})

// get one
replyRouter.get('/:replyId', async (req, res) => {
  const reply = await replyApi.getOneReply(req.params.replyId)
  return res.json(reply)
})

// get replies by review Id
replyRouter.get('/:reviewId', async (req, res) => {
  const replyList = await replyApi.getReplyByReviewId(req.params.reviewId)
  return res.json(replyList)
})

module.exports = {
  replyRouter
}
