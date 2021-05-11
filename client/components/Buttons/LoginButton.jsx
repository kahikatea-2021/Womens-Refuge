import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return <button className="shadow-lg py-5 self-center bg-poroporo hover:bg-poroporo text-white text-lg md:text-2xl w-2/3 md:w-1/3 rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out" onClick={() => loginWithRedirect()}>Log In</button>
}

export default LoginButton
