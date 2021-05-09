import { SET_USER, DELETE_USER } from '../actions/user'

const reducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user
    case DELETE_USER:
      return null
    default:
      return state
  }
}

export default reducer
