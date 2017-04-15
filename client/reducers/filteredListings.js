const allListings = (state = [], action) => {
  switch (action.type) {
    case 'FILTERED_LISTINGS':
      return action.filteredListings

    default:
      return state
  }
}

export default allListings
