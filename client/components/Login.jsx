import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LoginButton from './Buttons/LoginButton'
import LogoutButton from './Buttons/LogoutButton'

function Login () {
  return (
    <>
      <Header />
      <h2>Kia Ora!</h2>
      <h4>Please log in:</h4>
      <LoginButton />
      {/* <LogoutButton /> */}
      <Footer />
    </>
  )
}

export default Login
