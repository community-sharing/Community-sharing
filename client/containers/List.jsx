import React from 'react'
import ListItem from '../components/ListItem'
import {connect} from 'react-redux'

import { initialListings } from '../actions'
import { filteredListings } from '../actions'

function List(props) {
  return (
    <div className='List'>
      <div className="SearchBar">
        <input id="search-input" type="text" name="search" placeholder="Search.." />
      </div>

      <div className="Category">
        <ul className="Category-ul">
          <li className="Category-li" onClick={ () => filterList(props.dispatch, props.initialListings, "All") }>All</li>
          <li className="Category-li" onClick={ () => filterList(props.dispatch, props.initialListings, "Tools") }>Tools</li>
          <li className="Category-li" onClick={ () => filterList(props.dispatch, props.initialListings, "Musical Instruments" ) }>Music Instruments</li>
          <li className="Category-li" onClick={ () => filterList(props.dispatch, props.initialListings, "Sport and Recreation") }>Sport & Rec</li>
          <li className="Category-li" onClick={ () => filterList(props.dispatch, props.initialListings, "Other") }>Other</li>
        </ul>
      </div>

      {props.filteredListings.map( (listItem) => {
         return (
           <ListItem key={listItem.item_id} {...listItem} dispatch={props.dispatch} />
          )
      })}

  </div>
)}

  function mapStateToProps(state){
    return {
      initialListings: state.initialListings,
      filteredListings: state.filteredListings,
      dispatch: state.dispatch
    }
  }

  function filterList (dispatch, allListings, category){

    if (category == "All") {
      dispatch(filteredListings(allListings))
    } else {
      var filteredList = allListings.filter( (listItem) => {
        return listItem.category == category
      })
      dispatch(filteredListings(filteredList))  
    }
  }

  export default connect(mapStateToProps)(List)
