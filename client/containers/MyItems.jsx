import React from 'react'
import { connect } from 'react-redux'

import MyItemsCard from '../components/MyItemCard'

var toggleMyItems = true

class MyItems extends React.Component {
  constructor () {
    super()
    this.state = { toggleMyItems: true }
  }

  toggleItemView () {
    this.setState({ toggleMyItems: !this.state.toggleMyItems })
  }

  render () {
    return (
      <div className='dashboard-container'>
        <h4 onClick={() => this.toggleItemView()}>My Listings <i className='fa fa-arrow-down' aria-hidden='true' /></h4>
        {this.state.toggleMyItems ? myItems(this.props.allItems, this.props.loggedInUser.user_id) : ''}
      </div>
    )
  }
}

function myItems (allItems, user_id) {
  return allItems.map((item) => {
    if ((item.owner_id === user_id)) {
      return (
        <MyItemsCard key={item.item_id} {...item} />
      )
    }
  })
}

function mapStateToProps (state) {
  return {
    allItems: state.initialListings,
    loggedInUser: state.loggedInUserDetails
  }
}

export default connect(mapStateToProps)(MyItems)
