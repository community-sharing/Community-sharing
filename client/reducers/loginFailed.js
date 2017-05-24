const loginFailed = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_FAILED':
      return action.loginFailed

    default:
      return state
  }
}

export default loginFailed
