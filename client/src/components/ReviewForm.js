import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import ref from '../Firebase'

import './ReviewForm.css'


export default class ReviewForm extends Component {
  state = {
    newArtist: '',
    newTitle: '',
    imageFile: null,
    newMessage: '',
    redirect: false,
    imagePath: '',
    fileUploaded: false,
    guidFileName: '',
  }

  generateUUID = () => { // Public Domain/MIT
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  uploadCommonImage = async (e) => {
    e.preventDefault()
    if (this.state.imageFile) {
      const guidFileName = this.generateUUID();
      await this.setState({ guidFileName })
      const imagePath = `common/images/${guidFileName}`;
      try {
        //upload image
        const uploadTask = await ref.child(imagePath).put(this.state.imageFile, { contentType: this.state.imageFile.type });
        //get firebase url
        const downloadURL = await uploadTask.ref.getDownloadURL();
        this.setState({
          imagePath: downloadURL,
          fileUploaded: true
        })
      } catch (err) { //send error
        console.error('failed to upload image')
        console.error(err)
      }
    } else return
  }

  deleteCommonImage = async (e) => {
    e.preventDefault()
    const imagePath = `common/images/${this.state.guidFileName}`;
    const deleteTask = await ref.child(imagePath).delete();
    this.setState({
      fileUploaded: false,
      imagePath: '',
    })
    return deleteTask;
  }

  onFileChange = (e) => {
    if (e.target.files[0]) {
      const imageFile = e.target.files[0]
      this.setState({ imageFile })
    }
  }

  onFormChange = (e) => {
    const previousState = { ...this.state }
    previousState[e.target.name] = e.target.value
    this.setState(previousState)
  }

  submitNewReview = async (e) => {
    e.preventDefault()
    const newReview = {
      artist: this.state.newArtist,
      title: this.state.newTitle,
      image: this.state.imagePath,
      like: false,
      message: this.state.newMessage,
      upPlay: 0,
    }
    await axios.post('/api/review', newReview)
    this.setRedirect()
  }

  setRedirect = () => {
    this.setState({ redirect: true })
  }

  render() {
    return (
      <div className='create-review-container'>
        <form id='reviewForm'>
          <div className='hero-preview'>

            <div className='image-input-container'>
              <div className='image-preview'>
                <img src={this.state.imagePath === '' ?
                  './images/record-logo2.png'
                  :
                  this.state.imagePath}
                  alt='artist or song cover' />
              </div>

              <input type='file'
                name='imageFile'
                accept="image/*"
                onChange={this.onFileChange} />
              {this.state.fileUploaded ?
                <button onClick={this.deleteCommonImage}>
                  <img src='./images/clear-24px.svg' alt='remove image' />
                </button>
                :
                <button onClick={this.uploadCommonImage}>Upload</button>}
            </div>

            <div className='hero-right-preview'>
              <div className='title-input-container'>
                <label htmlFor='newTitle'
                  className='title-label'>Title</label>
                <br />
                <input type='text'
                  name='newTitle'
                  onChange={this.onFormChange} />

              </div>

              <div className='artist-input-container'>
                <label className='artist-label'
                  htmlFor='newArtist'>Artist</label>
                <span>By</span>
                <input type='text'
                  name='newArtist'
                  onChange={this.onFormChange}
                  className='artist-input' />
              </div>
            </div>

          </div>

          <div className='review-form-body-container'>
            <div className='review-input-container'>
              <label htmlFor='newMessage'>Review...</label>

              <textarea name='newMessage'
                form='reviewForm'
                onChange={this.onFormChange} />
            </div>

            <div className='review-post-container'>
              <span className='review-post'
                onClick={this.submitNewReview}>
                <img src='./images/post_add-24px.svg' alt='post' />
              </span>
            </div>
          </div>


        </form>

        {this.state.redirect ?
          <Redirect to='/' /> : null}

      </div>
    )
  }
}