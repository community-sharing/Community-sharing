const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return action.isLoggedIn

    default:
      return state
  }
}

export default isLoggedIn
