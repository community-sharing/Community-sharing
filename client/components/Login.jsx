import React from 'react'
import { connect } from 'react-redux'

import LoginWelcome from './LoginWelcome'
import LoginForm from './LoginForm'

class Login extends React.Component {
  render () {
    return (
      this.props.isLoggedIn ? <LoginWelcome /> : <LoginForm />
    )
  }
}

function mapStateToProps (state) {
  return {
    isLoggedIn: state.isLoggedIn,
    loginFailed: state.loginFailed
  }
}

export default connect(mapStateToProps)(Login)
