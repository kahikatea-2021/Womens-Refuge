import React from 'react'
import AddHouseForm from './Forms/AddHouseForm'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'

function AdminAddHouse () {
  const { isLoading, isAuthenticated } = useAuth0()
  const ourUser = useSelector(state => state.user)

  if (isLoading) {
    return <img src="/images/loading.gif"></img>
  }

  if (!isAuthenticated) {
    return <p>Unauthorised access</p>
  }
  if (ourUser?.isAdmin === false) {
    return <p>Unauthorised access</p>
  }

  return (
    <>
      {ourUser?.isAdmin && <AddHouseForm />}
    </>
  )
}

export default AdminAddHouse
