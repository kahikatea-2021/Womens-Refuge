import { SET_REGIONS } from '../actions/region'

export default function reducer (state = null, action) {
  switch (action.type) {
    case SET_REGIONS:
      return action.regions
    default:
      return state
  }
}
