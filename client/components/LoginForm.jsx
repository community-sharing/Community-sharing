import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { submitUser } from './component_functions/submitUser'

class Login extends React.Component {
  render () {
    return (
      <div className='login'>
        <img src='http://res.cloudinary.com/hpyyiawap/image/upload/v1495587527/community_mjarck.png' />
        <div className='LoginGreeting'>
          Welcome to Community Sharing.
          <br />
          Please sign in below.
        </div>
        <form>
          <label>Email</label><br /><input id='email-input' type='text' name='email' placeholder='example@email.com' /><br />
          <label>Password</label><br /><input id='password-input' type='password' name='password' />
          <p id='login-error-message'>{ this.props.loginFailed ? 'Login failed, please check your entered details' : ''}</p>
          <button type='button' value='Login' onClick={() => submitUser(event, this.props)}>Login</button>
        </form>
        <p>No account?</p>
        <Link to='/register' className='registerLink'>
          Register Here
        </Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    dispatch: state.dispatch,
    loginFailed: state.loginFailed
  }
}

export default connect(mapStateToProps)(Login)
