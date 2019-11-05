const mongoose = require('./connection.js')

const ReplySchema = new mongoose.Schema({
  message: String,
  reviewId: mongoose.Types.ObjectId,
})

const ReplyCollection = mongoose.model('Reply', ReplySchema)

const getAllReplies = () => {
  return ReplyCollection.find({})
}
const getOneReply = (id) => {
  return ReplyCollection.findById(id)
}
const createReply = (newReply) => {
  return ReplyCollection.create(newReply)
}
const updateReply = (id, newReply) => {
  return ReplyCollection.updateOne({ _id: id }, newReply)
}
const deleteReply = (id) => {
  return ReplyCollection.deleteOne({ _id: id })
}
const getReplyByReviewId = (reviewId) => {
  return ReplyCollection.find({ reviewId })
}

module.exports = {
  getAllReplies,
  getOneReply,
  createReply,
  updateReply,
  deleteReply,
  getReplyByReviewId
}
