const defaultUser = {
  address: "8 Drummond Road",
  email: "jb@email.com",
  fname: "Jon Test",
  hash: "",
  lname: "Bennett",
  phone:"027 111 2222",
  postcode: "6023",
  suburb: "Karori",
  town_city: "Wellington",
  user_id: 7005,
  user_image_url: ""
}


const loggedInUserDetails = (state = defaultUser, action) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return action.loggedInUserDetails

    default:
      return state
  }
}

export default loggedInUserDetails
