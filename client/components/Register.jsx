import React from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'

import { registerNewUser } from './component_functions/registerNewUser'

const CLOUDINARY_UPLOAD_PRESET = 'm7lw5icy'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/hpyyiawap/image/upload'

class Register extends React.Component {
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
    return (
      <div className='login'>
        <img src='http://res.cloudinary.com/hpyyiawap/image/upload/v1495587527/community_mjarck.png' />
        <div className='register'>
          <h1>Register</h1>
          <form onSubmit={registerNewUser} method='post'>
            <label>First Name: </label><input type='text' name='fname' /><br />
            <label>Last Name: </label><input type='text' name='lname' />
            <label>Email: </label><input type='text' name='email' />
            <label>Address: </label><input type='text' name='address' />
            <label>Suburb: </label><input type='text' name='suburb' />
            <label>Town/City: </label><input type='text' name='city' />
            <label>Postcode: </label><input type='text' name='postcode' />
            <label>Phone Number: </label><input type='text' name='phone' />
            <label>Password: </label><input type='password' name='hash' />
            <label>Profile Picture</label><input type='text' name='user_image_url' readOnly='readonly' value={this.state.uploadedFileCloudinaryUrl} /><br />

            <div className='imageButtonAndDisplay'>
              <Dropzone className='dropzone'
                onDrop={this.onImageDrop.bind(this)}
                multiple={false}
                accept='image/*'>
                <div className='uploadButton'>
                  Drop an image or click to select a file to upload.
                </div>
              </Dropzone>

              <div className='imageContainer'>
                { this.state.uploadedFileCloudinaryUrl === '' ? null : (
                  <div>
                    <img className='uploadImage' src={this.state.uploadedFileCloudinaryUrl} />
                  </div>
                )}
              </div>
            </div>
            <input type='submit' className='itemListingSubmit' value='Register' />
          </form>
        </div>
      </div>
    )
  }
}

export default Register
