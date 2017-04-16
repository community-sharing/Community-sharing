import React from 'react'
import { connect } from 'react-redux'

import { fetchBorrowedItems } from '../actions'
import MyBorrowedCard from '../components/MyBorrowedCard'

function MyBorrowing (props) {
  return (
    <div className='dashboard-section'>
      IM BORROWING
      <MyBorrowedCard />
    </div>
  )
}

function mapStateToProps(state){
  console.log(state.borrowedItemsState)
  return {
    dispatch: state.dispatch,
    borrowedItemsList: state.borrowedItemsState
  }
}

export default connect(mapStateToProps)(MyBorrowing)
