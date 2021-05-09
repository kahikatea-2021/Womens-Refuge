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

          <div className='flex w-full justify-center'>
            <a className='flex-col items-center' href='/'>
              <img className='mx-auto self-center w-20' src="../../images/logo.png"></img>
              <h1 className='mx-auto self-center font-bold text-xl'>Tuohunga</h1>
            </a>
          </div>

          <div className='flex w-full justify-end'>
            <LogoutButton className='flex fill-current inline-block w-1/2 content-center'/>
          </div>

        </div>

      </>
    )
  } else {
    return (
      <>
        <div className='flex w-full justify-center'>
          <a className='flex-col items-center' href='/'>
            <img className='mx-auto self-center w-20' src="../../images/logo.png"></img>
            <h1 className='mx-auto self-center font-bold text-poroporo text-xl'>Tuohunga</h1>
          </a>
        </div>
      </>
    )
  }
}

export default Header
