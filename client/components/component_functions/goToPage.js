import { menuVisable, dashboardTab } from '../../actions'

export { goToPage }

function goToPage (props) {
  props.dispatch(menuVisable())
  props.dispatch(dashboardTab('MySharingDetails'))
}
