const allListings = (state = [], action) => {
  switch (action.type) {
    case 'GET_LISTINGS':
      return action.initialListings

    default:
      return state
  }
}

export default allListings
