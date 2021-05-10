import { setUser, deleteUser } from '../actions/user'
import { setWait } from '../actions/waiting'
import { getUser } from '../apis/users'

export function setUserState (user, token, dispatch) {
  setWait(true)
  if (user) {
    localStorage.setItem('access-token', token)
    console.log('set user', user.sub)
    getUser(user.sub, token)
      .then(userInfo => {
        console.log('user info', userInfo)
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
