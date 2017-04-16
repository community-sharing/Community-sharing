import React from 'react'
import { connect } from 'react-redux'


function MyProfile (props) {
  return (
    <div className='profile-continer'>
      <div className='profile-image-container'>
        <img className='profile-image' src='http://www.dfhtechnologies.com/images/user.png'></img>
      </div>
      <div className='profile-details-container'>
        <p>{props.loggedInUserDetails.fname + " " + props.loggedInUserDetails.lname}</p>
        <p>Email: {props.loggedInUserDetails.email}</p>
        <p>Phone Number: {props.loggedInUserDetails.phone}</p>
        <p>Address:<br />
        {props.loggedInUserDetails.address}, <br />
        {props.loggedInUserDetails.suburb}, <br />
        {props.loggedInUserDetails.town_city}, <br />
        {props.loggedInUserDetails.postcode} <br />
      </p>
      </div>
    </div>
  )
}


function mapStateToProps(state){
  return {
    loggedInUserDetails: state.loggedInUserDetails
  }
}

export default connect(mapStateToProps)(MyProfile)
