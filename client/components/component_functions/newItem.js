import { getNewItem } from '../../api'

import { listNewItem, updateListing } from '../../actions'

export { newItem }

function newItem (event, props) {
  event.preventDefault(event)
  var newItemData = {
    item_name: event.target.elements.item_name.value,
    category: event.target.elements.category.value,
    description: event.target.elements.description.value,
    location: event.target.elements.location.value,
    image_url: event.target.elements.image_url.value,
    owner_id: event.target.elements.user_id.value,
    available: true
  }
  getNewItem(newItemCallback, newItemData)
  props.dispatch(listNewItem(newItemData))
  props.dispatch(updateListing())
  props.history.push('/dashboard')
}

function newItemCallback (err, status) {
  if (err) {
    console.log(err)
  } else {
    console.log(status)
  }
}
