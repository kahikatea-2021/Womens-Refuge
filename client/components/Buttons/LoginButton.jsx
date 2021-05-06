import React from 'react'
import { Link } from 'react-router-dom'
// PLEASE NOTE: the "to='/home'" is just a placeholder until we know the route names

function LoginButton () {
  return (
    <Link className='button' to='/home'>Login</Link>

  )
}

export default LoginButton
