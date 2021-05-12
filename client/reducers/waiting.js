import { SET_WAITING } from '../actions/waiting'

function reducer (state = false, action) {
  switch (action.type) {
    case SET_WAITING:
      return action.waiting
    default:
      return state
  }
}

export default reducer
