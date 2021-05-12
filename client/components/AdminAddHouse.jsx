import React from 'react'
import AddHouseForm from './Forms/AddHouseForm'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../apis/users'
import { setUser, deleteUser } from '../actions/user'

function AdminAddHouse () {
  const { isLoading, isAuthenticated, user } = useAuth0()
  const ourUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  if (isLoading) {
    return <img src="/images/loading.gif"></img>
  }

  if (isAuthenticated && !ourUser) {
    getUser(user.sub)
      .then(res => {
        dispatch(setUser(res))
        return null
      })
      .catch(err => console.log(err))
  } else if (!isAuthenticated && ourUser) {
    dispatch(deleteUser())
  }

  if (!isAuthenticated) {
    return <p>Unauthorised access</p>
  }

  return (
    <>
      {ourUser?.isAdmin
        ? <AddHouseForm />
        : <p>Unauthorised Access</p>}
    </>
  )
}

export default AdminAddHouse
