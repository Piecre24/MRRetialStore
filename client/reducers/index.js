import { combineReducers } from 'redux'

import activePage from './activePage'
import selectSize from './selectsize'
import addToCart from './addToCart'

export default combineReducers({
  activePage,
  selectSize,
  addToCart
})
