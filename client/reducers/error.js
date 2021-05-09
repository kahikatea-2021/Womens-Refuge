import { SET_ERROR, CLEAR_ERROR } from '../actions/error'

const reducer = (state = '', action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.errorMsg
    case CLEAR_ERROR:
      return null
    default:
      return state
  }
}

export default reducer
