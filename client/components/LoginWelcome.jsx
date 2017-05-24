import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class LoginWelcome extends React.Component {

  render () {
    return (
      <div className='login-welcome-container'>
        <img src='http://res.cloudinary.com/hpyyiawap/image/upload/v1495587527/community_mjarck.png' />

        <h3>Welcome {this.props.loggedInUserDetails.fname}</h3>

        <p>You are now logged in and are now able to lend and share items with others in your community!</p>
        <br />
        <Link to='/lender-form'>
          <button>Lend an Item</button>
        </Link>
        <br />
        <Link to='/list-all'>
          <button>Borrow and Item</button>
        </Link>
        <br />
        <Link to='/dashboard'>
          <button>Your Dashboard</button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    dispatch: state.dispatch,
    loggedInUserDetails: state.loggedInUserDetails
  }
}

export default connect(mapStateToProps)(LoginWelcome)
