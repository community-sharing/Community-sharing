import React from 'react'

import MyListings from './MyListings.jsx'
import MyBorrowing from './MyBorrowing.jsx'
import MySharedItems from './MySharedItems.jsx'


function MySharingDetails () {
  return (
    <div>
      <MyListings />
      <MyBorrowing />
      <MySharedItems />
    </div>
  )
}

export default MySharingDetails
