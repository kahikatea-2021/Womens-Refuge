
import { dispatch, getState } from '../store'
import { setWaiting, clearWaiting } from '../actions/waiting'
import { showError } from '../actions/error'

export function toggleAvailabilityStatus (house_id, isAvailable) {
  const storeState = getState()
  const { id } = storeState.user
  if (!id) {
    dispatch(showError('Please register or sign in to volunteer.'))
    return Promise.resolve(false)
  } else {
    dispatch(setWaiting())
    const routeMethod = isAvailable ? 'delete' : 'post'
    const userData = { userId: id, house_id }

    return consume('/volunteer', routeMethod, userData)
      .then(() => true)
      .catch((error) => {
        dispatch(showError(error.message))
        return false
      })
      .finally(() => {
        dispatch(clearWaiting())
      })
  }
}
