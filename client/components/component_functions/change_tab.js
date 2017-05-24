import { dashboardTab } from '../../actions'

export { changeTab }

function changeTab (props, clickedTab) {
  if (props.dashboardState === 'myProfile') {
    document.getElementById('sharing-button').classList.add('dashboard-active-button')
    document.getElementById('profile-button').classList.remove('dashboard-active-button')
  } else {
    document.getElementById('sharing-button').classList.remove('dashboard-active-button')
    document.getElementById('profile-button').classList.add('dashboard-active-button')
  }
  props.dispatch(dashboardTab(clickedTab))
}
