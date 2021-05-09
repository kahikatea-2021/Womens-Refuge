import { setUser, deleteUser } from '../actions/user'
import { setWait } from '../actions/waiting'
import { getUser } from '../apis/users'

export function setUserState (user, token, dispatch) {
  setWait(true)
  if (user) {
    localStorage.setItem('access-token', token)
    getUser(user.sub, token)
      .then(userInfo => {
        userInfo.token = token
        dispatch(setUser(userInfo))
        setWait(false)
        return null
      })
      .catch(err => {
        setWait(false)
        console.log(err)
      })
  } else {
    setWait(false)
    localStorage.removeItem('access-token')
    deleteUser()
  }
}
