import React from 'react'
import { Link } from 'react-router-dom'

import { registerUser } from '../api'

const Register = () => (
  <div className="login">
    <img src="http://otlmedia.co.za/wp-content/uploads/2013/10/share1inch.png" />
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={ registerNewUser } method="POST">
        <label>First Name: </label><input type="text" name="fname" /><br />
        <label>Last Name: </label><input type="text" name="lname"  />
        <label>Email: </label><input type="text" name="email"  />
        <label>Address: </label><input type="text" name="address" />
        <label>Suburb: </label><input type="text" name="suburb" />
        <label>Town/City: </label><input type="text" name="city" />
        <label>Postcode: </label><input type="text" name="postcode" />
        <label>Phone Number: </label><input type="text" name="phone" />
        <label>Password: </label><input type="password" name="hash" />
        <label>Profile Picture</label><input type="file" name="pic" accept="image/*" />
        <input type="submit" value="Register"/>
      </form>
    </div>
  </div>
  )

function registerNewUser(event) {
  event.preventDefault(event)
  var formData = {
   fname: event.target.elements.fname.value,
   lname: event.target.elements.lname.value,
   email: event.target.elements.email.value,
   address: event.target.elements.address.value,
   suburb: event.target.elements.suburb.value,
   town_city: event.target.elements.city.value,
   postcode: event.target.elements.postcode.value,
   phone: event.target.elements.phone.value
 }
  registerUser(testCallback, formData)
}

function testCallback(err, status){
  console.log(status)
}

export default Register
