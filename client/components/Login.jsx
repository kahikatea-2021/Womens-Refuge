import React from 'react'
import LoginButton from './Buttons/LoginButton'

function Login () {
  return (
    <>
      <div className='mt-12 md:mt-36 text-center flex-col justify-center'>
        <h2 className='text-4xl text-bold md:text-6xl'>Kia Ora!</h2>
        <h2 className='mb-6 text-lg md:text-3xl'>Please log in</h2>
        <LoginButton />
      </div>
    </>
  )
}

export default Login
