import { registerUser } from '../../api'

export { registerNewUser }

function registerNewUser (event) {
  event.preventDefault(event)
  var formData = {
    fname: event.target.elements.fname.value,
    lname: event.target.elements.lname.value,
    email: event.target.elements.email.value,
    address: event.target.elements.address.value,
    suburb: event.target.elements.suburb.value,
    town_city: event.target.elements.city.value,
    postcode: event.target.elements.postcode.value,
    phone: event.target.elements.phone.value,
    user_image_url: event.target.elements.user_image_url.value
  }
  registerUser(registerCallback, formData)
}

function registerCallback (err, status) {
  if (err) {
    console.log(err)
  } else {
    console.log(status)
  }
}
