import request from 'superagent'
const url = require('url')
const config = require('../../config')

var urlPath = url.format(config)



var currentMenuState = false

export const menuNavigation = () => {
  if(currentMenuState == false){
    currentMenuState = true;
  }else{
    currentMenuState = false
  }

  return {
    type: 'MENU_STATE',
    menuState: currentMenuState
  }
}

export const dashboardTab = (clickedTab) => {
  return {
    type: 'DASHBOARD_TAB',
    dashboardState: clickedTab
  }
}


export const initialListings = (listings) => {
  return {
    type: 'GET_LISTINGS',
    initialListings: listings
  }
}

export const filteredListings = (listings) => {
  return {
    type: 'FILTERED_LISTINGS',
    filteredListings: listings
  }
}

export const displaySingleItem = (item) => {
  return {
    type: 'SINGLE_ITEM',
    item
  }
}

export const loggedInUser = (loggedInUserDetails) => {
  return {
    type: 'LOGGED_IN_USER',
    loggedInUserDetails
  }
}

export const fetchUser = (submitedEmail) => {
  return (dispatch) => {
  request
    .get(urlPath + "/user/"+submitedEmail)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(loggedInUser(res.body[0]))
    })
  }
}
