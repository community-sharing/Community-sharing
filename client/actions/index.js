import request from 'superagent'
const url = require('url')

const config = require('../../config')

var urlPath = url.format(config)
var menuVisableState = false

export const menuVisable = () => {
  if (menuVisableState === false) {
    menuVisableState = true
  } else {
    menuVisableState = false
  }
  return {
    type: 'MENU_VISABLE',
    menuVisableState: menuVisableState
  }
}

export const dashboardTab = clickedTab => {
  return {
    type: 'DASHBOARD_TAB',
    dashboardState: clickedTab
  }
}

export const initialListings = listings => {
  return {
    type: 'GET_LISTINGS',
    initialListings: listings
  }
}

export const filteredListings = listings => {
  return {
    type: 'FILTERED_LISTINGS',
    filteredListings: listings
  }
}

export const displaySingleItem = item => {
  return {
    type: 'SINGLE_ITEM',
    item
  }
}

export const loggedInUser = loggedInUserDetails => {
  return {
    type: 'LOGGED_IN_USER',
    loggedInUserDetails
  }
}

export const userLoggedIn = isLoggedIn => {
  return {
    type: 'USER_LOGGED_IN',
    isLoggedIn
  }
}

export const loginFailed = loginFailed => {
  return {
    type: 'LOGIN_FAILED',
    loginFailed
  }
}

export const loginUser = submitedEmail => {
  return dispatch => {
    request.get(urlPath + '/user/' + submitedEmail).end((err, res) => {
      if (res.body[0] === undefined) {
        dispatch(loginFailed(true))
        return
      } else {
        dispatch(loginFailed(false))
        dispatch(userLoggedIn(true))
        dispatch(loggedInUser(res.body[0]))
        dispatch(fetchLoanedItems(res.body[0].user_id))
        dispatch(fetchBorrowedItems(res.body[0].user_id))
      }
    })
  }
}

export const borrowedItems = borrowedItemList => {
  return {
    type: 'BORROWED_ITEMS',
    borrowedItemList
  }
}

export const fetchBorrowedItems = loggedInUserId => {
  return dispatch => {
    request
      .get(urlPath + '/borrowedItems/' + loggedInUserId)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(borrowedItems(res.body))
      })
  }
}

export const loanedItems = loanedItemsList => {
  return {
    type: 'LOANED_ITEMS',
    loanedItemsList
  }
}

export const fetchLoanedItems = loggedInUserId => {
  return dispatch => {
    request.get(urlPath + '/loanedItems/' + loggedInUserId).end((err, res) => {
      if (err) {
        console.error('fetchLoanedItems ' + err.message)
        return
      }
      dispatch(loanedItems(res.body))
    })
  }
}

export const singleItemOrder = orderItem => {
  return {
    type: 'SINGLE_ORDER_ITEM',
    orderItem
  }
}

export const fetchSingleItem = itemId => {
  return dispatch => {
    request.get(urlPath + '/items/' + itemId).end((err, res) => {
      if (err) {
        console.error('fetchSingleItem ' + err.message)
        return
      }
      dispatch(singleItemOrder(res.body))
    })
  }
}

export const lenderDetails = (lenderDetails) => {
  return {
    type: 'LENDER_DETAILS',
    lenderDetails
  }
}

export const fetchLenderById = (userId) => {
  return (dispatch) => {
    request
    .get(urlPath + '/userById/' + userId)
    .end((err, res) => {
      if (err) {
        console.error('fetchUserById ' + err.message)
        return
      }
      dispatch(lenderDetails(res.body))
    })
  }
}

export const borrowerDetails = (borrowerDetails) => {
  return {
    type: 'BORROWER_DETAILS',
    borrowerDetails
  }
}

export const fetchBorrowerById = (userId) => {
  return (dispatch) => {
    request
    .get(urlPath + '/userById/' + userId)
    .end((err, res) => {
      if (err) {
        console.error('fetchUserById ' + err.message)
        return
      }
      dispatch(borrowerDetails(res.body))
    })
  }
}

export const listNewItem = (newItemData) => {
  return {
    type: 'LIST_NEW_ITEM',
    newItemData
  }
}

export const searchForItem = (searchText) => {
  return (dispatch) => {
    request
    .get(urlPath + '/search/' + searchText)
    .end((err, res) => {
      if (err) {
        console.error('SearchForItem ' + err.message)
        return
      }
      dispatch(filteredListings(res.body))
    })
  }
}

export const updateListing = () => {
  return (dispatch) => {
    request
   .get(urlPath + /items/)
   .end((err, res) => {
     if (err) {
       console.error('upDateListing ' + err.message)
       return
     }
     dispatch(initialListings(res.body))
     dispatch(filteredListings(res.body))
   })
  }
}

export const borrowRequest = (borrowRequestDetails) => {
  return (dispatch) => {
    request
    .post(urlPath + /loanRequest/)
    .send(borrowRequestDetails)
    .end((err, res) => {
      if (err) {
        console.error('borrowRequest ' + err.message)
        return
      }
      dispatch(fetchBorrowedItems(borrowRequestDetails.borrowers_id))
    })
  }
}
