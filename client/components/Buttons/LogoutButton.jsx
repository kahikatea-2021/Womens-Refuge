import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { deleteUser } from '../../actions/user'
import { useDispatch } from 'react-redux'

const LogoutButton = () => {
  const { logout } = useAuth0()
  const dispatch = useDispatch()

  function handleClick () {
    logout({ returnTo: window.location.origin })
    localStorage.removeItem('access-token')
    dispatch(deleteUser())
  }

  return (
    <button className="shadow-2xl md:py-3 md:text-base md:w-24 py-2 self-center bg-poroporo hover:bg-poroporo text-white text-xs w-16 rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out" onClick={() => handleClick()}>
      LOG OUT
    </button>
  )
}

export default LogoutButton
