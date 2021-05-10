import { SET_HOUSES, CLEAR_HOUSES } from '../actions/houses'

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_HOUSES:
      return action.houses
    case CLEAR_HOUSES:
      return []
    default:
      return state
  }
}

export default reducer
