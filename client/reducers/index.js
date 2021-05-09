import { combineReducers } from 'redux'

import fruits from './fruits'
import house from './house'
import regions from './regions'
import waiting from './waiting'

export default combineReducers({
  fruits,
  house,
  waiting,
  regions
})
