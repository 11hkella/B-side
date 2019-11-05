const mongoose = require('./connection.js')

const ReviewSchema = new mongoose.Schema({
  artist: String,
  albumOrSong: String,
  image: String,
  like: Boolean,
  message: String,
  agree: Number,
})

const ReviewCollection = mongoose.model('Review', ReviewSchema)

const getAllReviews = () => {
  return ReviewCollection.find({})
}
const getOneReview = (id) => {
  return ReviewCollection.findById(id)
}
const createReview = (newReview) => {
  return ReviewCollection.create(newReview)
}
const updateReview = (id, newReview) => {
  return ReviewCollection.updateOne({ _id: id }, newReview)
}
const deleteReview = (id) => {
  return ReviewCollection.deleteOne({ _id: id })
}

module.exports = {
  getAllReviews,
  getOneReview,
  createReview,
  updateReview,
  deleteReview,
}
