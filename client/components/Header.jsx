import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './Buttons/LogoutButton'
import BackButton from './Buttons/BackButton'
function Header () {
  const { isLoading, isAuthenticated } = useAuth0()

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isAuthenticated) {
    return (
      <>

        <div className='flex w-full items-center content-center pb-8'>

          <div className='flex w-full justify-start'>
            <BackButton className='flex fill-current inline-block w-1/2 content-center'/>
          </div>

          <a className='flex-col justify-center items-center w-full' href='/'>
            <img className='mx-1/2 justify-center w-20' src="../../images/logo.png"></img>
            <h1 className='mx-1/2 justify-center text-lg'>Tuohunga</h1>
          </a>

          <div className='flex w-full justify-end'>
            <LogoutButton className='flex fill-current inline-block w-1/2 content-center'/>
          </div>

        </div>

      </>
    )
  } else {
    return (
      <>
        <div className='flex w-full align-center items-center content-center'>
          <a className='flex-col justify-center items-center w-full' href='/'>
            <img className='mx-1/2 justify-center w-20' src="../../images/logo.png"></img>
            <h1 className='mx-1/2 justify-center text-lg'>Tuohunga</h1>
          </a>
        </div>
      </>
    )
  }
}

export default Header
