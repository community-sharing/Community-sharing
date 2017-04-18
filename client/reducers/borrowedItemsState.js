const borrowedItemsState = (state = [], action) => {
  switch (action.type) {
    case 'BORROWED_ITEMS':
      return action.borrowedItemList

    default:
      return state
  }
}

export default borrowedItemsState
