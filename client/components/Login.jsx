import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchUser } from '../actions'

let Login = (props) => (
  <div className='login'>
    <img src='http://res.cloudinary.com/hpyyiawap/image/upload/v1495587527/community_mjarck.png' />
    <div className='LoginGreeting'>
      Welcome to Community Sharing. <br /> Please sign in below.
    </div>
    <form>
      <label>Email</label><br /><input id='email-input' type='text' name='email' placeholder='example@email.com' /><br />
      <label>Password</label><br /><input type='password' name='password' />
      <Link to='/dashboard'>
        <button type='button' value='Login' onClick={() => submitUser(event, props)} >Login</button>
      </Link>
    </form>
    <p>No account?</p>
    <Link to='/register' className='registerLink'>
      Register Here
    </Link>
  </div>
)

function mapStateToProps (state) {
  return {
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Login)

function submitUser (ev, props) {
  ev.preventDefault(ev)
  props.dispatch(fetchUser(document.getElementById('email-input').value))
}
