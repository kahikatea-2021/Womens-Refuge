import { SET_HOUSE } from '../actions/house'

const houseReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_HOUSE:
      return action.house
    default:
      return state
  }
}

export default houseReducer
