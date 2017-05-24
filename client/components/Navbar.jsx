import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import NavbarMenu from './NavbarMenu.jsx'

import { openMenu } from './component_functions/openMenu'

let Navbar = (props) => (
  <div className='header-menu-container'>
    <div className='header-container'>
      <div className='hambuger-container' onClick={() => openMenu(props)}>
        { props.menuVisable ? <i className='fa fa-times' aria-hidden='true' /> : <i className='fa fa-bars' aria-hidden='true' /> }
      </div>
      <Router>
        <div className='title-container'>
          <div>
            <Link className='navLink' to='/'>
              <p className='site-title'>Community Sharing</p>
            </Link>
          </div>
          <div className='login-button-container'>
            <Link className='navLink' to='/login'>
              <i className='fa fa-user' aria-hidden='true' />
            </Link>
          </div>
        </div>
      </Router>
    </div>
    { props.menuVisable ? <NavbarMenu /> : '' }
  </div>
)

function mapStateToProps (state) {
  return {
    dispatch: state.dispatch,
    menuVisable: state.menuVisableState
  }
}

export default connect(mapStateToProps)(Navbar)
