import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import { fetchLenderById } from '../actions'

import { sendBorrowRequest } from './component_functions/sendBorrowRequest'

class SingleItem extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0)
    this.props.dispatch(fetchLenderById(this.props.item.owner_id))
  }

  render () {
    return (
      <div className='item-listing'>
        <div>
          <h1 className='itemTitle'>{this.props.item.item_name}</h1>
          <img className='itemListingImage' src={this.props.item.image_url} />
          <p>
            {this.props.item.description}
          </p>
        </div>
        <div className='itemListingUserDetails'>
          <img className='itemListingUserPhoto' src={this.props.lenderDetails.user_image_url} />
          <h2>{this.props.lenderDetails.fname} {this.props.lenderDetails.lname}</h2>
          <h3>{this.props.item.location}</h3>
        </div>
        <form className='requestForm' action='/action_page.php'>
          <p>
            <input type='checkbox' />By ticking this box, I agree to the <Link to='/ts&cs'>Terms and Conditions</Link> of Community Share.
          </p>
          <Router>
            <Link to='/dashboard'>
              <input className='request-button' type='submit' value='Request Item' onClick={() => sendBorrowRequest(this.props)} />
            </Link>
          </Router>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    item: state.singleItem,
    dispatch: state.dispatch,
    lenderDetails: state.lenderDetails[0],
    loggedInUserDetails: state.loggedInUserDetails
  }
}

export default connect(mapStateToProps)(SingleItem)
