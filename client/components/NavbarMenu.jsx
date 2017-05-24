import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import { goToPage } from './component_functions/goToPage'

let NavbarMenu = (props) => (
  <div className='navigation-menu-container'>
    <Router>
      <ul>
        <li className='navigation-item' onClick={() => goToPage(props)}><Link to='/login'>Register/Login</Link></li>
        <li className='navigation-item' onClick={() => goToPage(props)}><Link to='/dashboard'>Your Dashboard</Link></li>
        <li className='navigation-item' onClick={() => goToPage(props)}><Link to='/list-all'>Borrow an item</Link></li>
        <li className='navigation-item' onClick={() => goToPage(props)}><Link to='/lender-form'>Lend an item</Link></li>
      </ul>
    </Router>
  </div>
)

function mapStateToProps (state) {
  return {
    dispatch: state.dispatch,
    menuState: state.menuState
  }
}

export default connect(mapStateToProps)(NavbarMenu)
