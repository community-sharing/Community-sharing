import { loginUser } from '../../actions'

export { submitUser }

function submitUser (ev, props) {
  ev.preventDefault(ev)

  document.getElementById('login-error-message').innerHTML = ''

  var validEmail = validateEmail(document.getElementById('email-input').value)
  var enteredPassword = checkPassword(document.getElementById('password-input').value)

  if (validEmail === false) {
    document.getElementById('login-error-message').innerHTML = 'The entered email is invalid, please try again.'
  }

  if ((validEmail === true) && (enteredPassword === false)) {
    document.getElementById('login-error-message').innerHTML = 'Please enter a password'
  }

  validEmail && enteredPassword ? props.dispatch(loginUser(document.getElementById('email-input').value)) : ''
}

function validateEmail (email) {
  var regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regularExpression.test(email)
}

function checkPassword (password) {
  if (password === '') {
    return false
  } else {
    return true
  }
}
