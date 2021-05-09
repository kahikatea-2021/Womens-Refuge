import { combineReducers } from 'redux'

import fruits from './fruits'
import house from './house'
import regions from './regions'
import waiting from './waiting'
import user from './user'
import error from './error'

export default combineReducers({
  fruits,
  house,
  waiting,
  regions,
  user,
  error
})
