import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { fetchUser } from '../actions'

var email = ''

let Login = (props) => (
  <div className="login">
    <img src="http://otlmedia.co.za/wp-content/uploads/2013/10/share1inch.png" />
    <div className="LoginGreeting">
      Welcome to [insert kick-ass name here]. <br /> Please sign in below.
    </div>
    <form>
      <label>Email</label><input type="text" name="email" placeholder='example@email.com' onKeyUp={e => { makeEmail(e) }} />
      <label>Password</label><input type="password" name="password" />
      <input type="submit" value="Login" onClick={ () => submitUser(props)} />
    </form>
    <p>No account?</p><Link to="/register">Register Now?</Link>
  </div>
)

function makeEmail (e){
  email = e.currentTarget.value
  console.log(email);
}

function mapStateToProps(state){
  return {
    dispatch: state.dispatch,
  }
}

export default connect(mapStateToProps)(Login)



function submitUser(props){
  props.dispatch(fetchUser(email))
}
