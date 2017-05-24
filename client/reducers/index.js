import { combineReducers } from 'redux'

import menuState from './menuState'
import dashboardState from './dashboardState'
import initialListings from './allListings'
import filteredListings from './filteredListings'
import singleItem from './singleItem'
import loggedInUserDetails from './loggedInUserDetails'
import loanedItems from './loanedItems'
import orderItemDetails from './orderItemDetails'
import borrowedItemsState from './borrowedItemsState'
import lenderDetails from './lenderDetails'
import borrowerDetails from './borrowerDetails'
import menuVisableState from './menuVisableState'
import isLoggedIn from './isLoggedIn'
import loginFailed from './loginFailed'

export default combineReducers({
  menuState,
  dashboardState,
  initialListings,
  filteredListings,
  singleItem,
  loggedInUserDetails,
  loanedItems,
  orderItemDetails,
  borrowedItemsState,
  lenderDetails,
  borrowerDetails,
  menuVisableState,
  isLoggedIn,
  loginFailed
})
