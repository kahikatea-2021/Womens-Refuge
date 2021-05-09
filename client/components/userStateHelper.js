import { setUser, deleteUser } from '../actions/user'

export function setUserState (user, dispatch) {
  if (user) {
    dispatch(setUser(user))
  } else {
    deleteUser()
  }
}
