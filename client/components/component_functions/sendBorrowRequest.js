import { borrowRequest } from '../../actions'

export { sendBorrowRequest }

function sendBorrowRequest (props) {
  var borrowerRequestDetails = {
    borrowers_id: props.loggedInUserDetails.user_id,
    lenders_id: props.lenderDetails.user_id,
    item_id: props.item.item_id,
    pickup: '2017-04-25 14:12:22',
    dropoff: '2017-04-30 10:00:00'
  }
  props.dispatch(borrowRequest(borrowerRequestDetails))
}
