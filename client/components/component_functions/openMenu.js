import { menuVisable } from '../../actions'

export { openMenu }

function openMenu (props) {
  props.dispatch(menuVisable())
}
