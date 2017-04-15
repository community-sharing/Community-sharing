import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { menuNavigation } from '../actions'

const NavigationMenu = (props) => (

  <div className='navigation-menu-container'>
    <Router>
      <ul>
        <li className='navigation-item' onClick={ () => openMenu(props) }><Link to="/login">Register/Login</Link></li>
        <li className='navigation-item' onClick={ () => openMenu(props) }><Link to="/dashboard">Your Dashboard</Link></li>
        <li className='navigation-item' onClick={ () => openMenu(props) }><Link to="/list">Borrow an item</Link></li>
        <li className='navigation-item' onClick={ () => openMenu(props) }><Link to="/lender-form">Lend an item</Link></li>
      </ul>
    </Router>
  </div>
)

function mapStateToProps(state){
  return {
    dispatch: state.dispatch,
    menuState: state.menuState
  }
}

export default connect(mapStateToProps)(NavigationMenu)

function openMenu(props) {
  props.dispatch(menuNavigation())
}
