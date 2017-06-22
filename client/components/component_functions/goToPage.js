import { menuVisable, dashboardTab, searchFailed } from '../../actions'

export { goToPage }

function goToPage (props) {
  props.dispatch(menuVisable())
  props.dispatch(dashboardTab('MySharingDetails'))
  props.dispatch(searchFailed(false))
}
