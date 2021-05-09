export const SET_USER = 'SET_USER'
export const DELETE_USER = 'DELETE_USER'

export function setUser (user) {
  console.log('user', user)
  return {
    type: SET_USER,
    user
  }
}

export function deleteUser () {
  return {
    type: DELETE_USER
  }
}
