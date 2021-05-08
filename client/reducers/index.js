import { combineReducers } from 'redux'

import fruits from './fruits'
import house from './house'
import waiting from './waiting'

export default combineReducers({
  fruits,
  house,
  waiting
})
