import React from 'react'
import { connect } from 'react-redux'

import Dropzone from 'react-dropzone'
import request from 'superagent'

import { newItem } from './component_functions/newItem'

const CLOUDINARY_UPLOAD_PRESET = 'm7lw5icy'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/hpyyiawap/image/upload'

class LenderForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    }
  }

  onImageDrop (files) {
    this.setState({
      uploadedFile: files[0]
    })
    this.handleImageUpload(files[0])
  }

  handleImageUpload (file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file)

    upload.end((err, response) => {
      if (err) {
        console.error(err)
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        })
      }
    })
  }

  render () {
    const { user_id } = this.props
    return (
      <div className='lenderForm'>

        <h1>List An Item</h1>
        <form method='post' onSubmit={(e) => { newItem(e, this.props) }} >
          <label>Title</label><br /><input type='text' name='item_name' /><br />
          <label>Category</label><br />
          <select name='category'>
            <option value='Tools'>Tools</option>
            <option value='Sport and Recreation'>Sport and Recreation</option>
            <option value='Music'>Music</option>
            <option value='Other'>Other</option>
          </select>
          <label>Description</label><br /><input type='text' name='description' /><br />
          <label>Location</label><br /><input type='text' name='location' /><br />
          <label>Image Upload</label><br /><input type='hidden' name='image_url' value={this.state.uploadedFileCloudinaryUrl} /><br />

          <div className='imageButtonAndDisplay'>
            <Dropzone className='dropzone'
              onDrop={this.onImageDrop.bind(this)}
              multiple={false}
              accept='image/*'>
              <div className='uploadButton'>Drop an image or click to select a file to upload.</div>
            </Dropzone>

            <div className='imageContainer'>
              { this.state.uploadedFileCloudinaryUrl === '' ? null : (
                <div>
                  <img className='uploadImage' src={this.state.uploadedFileCloudinaryUrl} />
                </div>
              )}
            </div>
          </div>

          <input type='hidden' value={user_id} name='user_id' />
          <input className='createListing' type='submit' value='Create Listing' />
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user_id: state.loggedInUserDetails.user_id
  }
}

export default connect(mapStateToProps)(LenderForm)
