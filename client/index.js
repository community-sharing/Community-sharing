import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'
import {initialListings} from './actions'
import {filteredListings} from './actions'

import { getListings } from './api'

let store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

document.addEventListener('DOMContentLoaded', () => {
  getListings( (err, listings) => {
    if (err) console.log(err) // to do handle error
    store.dispatch(initialListings(listings))
    store.dispatch(filteredListings(listings))
  } )
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
