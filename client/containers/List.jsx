import React from 'react'
import {connect} from 'react-redux'
import BackToTop from '../components/BackToTop'

import ListAllItems from '../components/ListAllItems'
import { filteredListings, searchForItem } from '../actions'

function List (props) {

  window.scrollTo(0, 0)

  return (
    <div className='List'>
      <div className='search-bar-container'>
        <i className='fa fa-search' aria-hidden='true' />
        <input id='search-input' type='text' name='search' placeholder='search...' />
        <button className='search-button' onClick={() => search(props.dispatch)}>Search</button>
      </div>

      <div className='category-dropdown'>
        <select id='category-input' selected='All' name='category' onChange={(e) => changeEventHandler(e, props.dispatch, props.initialListings)}>
          <option value='All'>All</option>
          <option value='Tools'>Tools</option>
          <option value='Musical Instruments'>Musical Instruments</option>
          <option value='Sport and Recreation'>Sport and Recreation</option>
          <option value='Other'>Other</option>
        </select>
      </div>

      {props.filteredListings.map((listItem) => {
        return (
          <ListAllItems key={listItem.item_id} {...listItem} dispatch={props.dispatch} />
        )
      })}
      <BackToTop />
    </div>
  )
}

function changeEventHandler (event, dispatch, initialListings) {
  filterList(dispatch, initialListings, event.currentTarget.value)
}

function mapStateToProps (state) {
  return {
    initialListings: state.initialListings,
    filteredListings: state.filteredListings,
    dispatch: state.dispatch
  }
}

function search (dispatch) {
  dispatch(searchForItem(document.getElementById('search-input').value, document.getElementById('category-input').value))
}

function filterList (dispatch, allListings, category) {
  if (category === 'All') {
    dispatch(filteredListings(allListings))
  } else {
    var filteredList = allListings.filter((listItem) => {
      return listItem.category === category
    })
    dispatch(filteredListings(filteredList))
  }
}

export default connect(mapStateToProps)(List)
