import React from 'react'
import {connect} from 'react-redux'

function ItemListing (props) {
  return (

    <div className="ItemListing">
      <div>
        <h1 className="itemTitle">{props.item.item_name}</h1>
        <img className="itemListingImage" src="http://static.musiciansfriend.com/derivates/18/001/446/174/DV016_Jpg_Large_518963.019_cherry_body_closeup.jpg" />
        <p>
          {props.item.description}
        </p>
      </div>
      <div className="itemListingUserDetails">
        <img className="itemListingUserPhoto" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" />
        <h2>Lender Name</h2>
        <h3>{props.item.location}</h3>
      </div>
      <form className="requestForm" action="/action_page.php">
        <p>
          <input type="checkbox" name="vehicle" value="Bike" />By ticking this box, I agree to the <a href="#">Terms and Condtions</a> of Community Share.
        </p>
        <input type="submit" value="Request Item" />
      </form>
    </div>

)}

function mapStateToProps(state){
  return {
    item: state.singleItem
  }
}

export default connect(mapStateToProps)(ItemListing)
