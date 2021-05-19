import { combineReducers } from 'redux'

import activePage from './activePage'
import selectSize from './selectSize'

export default combineReducers({
  activePage,
  selectSize
})
