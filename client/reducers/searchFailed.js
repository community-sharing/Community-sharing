const searchFailed = (state = false, action) => {
  switch (action.type) {
    case 'SEARCH_FAILED':
      return action.searchFailed

    default:
      return state
  }
}

export default searchFailed
