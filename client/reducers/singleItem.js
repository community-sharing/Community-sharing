const allListings = (state = [], action) => {
  switch (action.type) {
    case 'SINGLE_ITEM':
      return action.item

    default:
      return state
  }
}

export default allListings
