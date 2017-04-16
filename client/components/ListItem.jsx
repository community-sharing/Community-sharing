import React from 'react'
import { Link } from 'react-router-dom'
import { displaySingleItem } from '../actions'

function ListItem (props) {
  return (
  <div className="listItem">
    <div className="listItemHeader">
      <h2>{props.item_name}</h2>
      <h3>{props.location}</h3>
    </div>

    <Link to="/list-item">
      <div className="listItemImageContainer"  onClick={ () => props.dispatch(displaySingleItem(props))} >
        <img className="listItemImage" src="http://images.nationalgeographic.com/wpf/media-live/photos/000/174/cache/lawn-mower_17497_600x450.jpg" />
      </div>
    </Link>

    <p> {props.description}
    </p>

  </div>
)}

export default ListItem
