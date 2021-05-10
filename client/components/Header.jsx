import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './Buttons/LogoutButton'
import BackButton from './Buttons/BackButton'
import LoadingIcon from './LoadingIcon'
import ViewAllButton from './Buttons/ViewAllButton'
import ManageHouseButton from './Buttons/ManageHouseButton'
function Header () {
  const { isLoading, isAuthenticated } = useAuth0()

  if (isLoading) {
    return <LoadingIcon/>
  }
  if (isAuthenticated) {
    return (
      <>

        <div className='flex w-full items-center content-center pb-8'>

          <div className='flex w-full justify-start'>
            <BackButton className='flex fill-current inline-block w-1/2 content-center'/>
          </div>

          <div className='flex w-full justify-center'>
            <Link to='/' className='flex-col items-center'>
              <img className='mx-auto self-center w-20' src="/images/logo.png"></img>
              <h1 className='mx-auto self-center text-poroporo font-bold text-xl'>Tuohunga</h1>
            </Link>
          </div>

          <div className='flex w-full justify-end'>
            <ManageHouseButton />
            <ViewAllButton />
            <LogoutButton className='flex fill-current inline-block w-1/2 content-center'/>
          </div>

        </div>

      </>
    )
  } else {
    return (
      <>
        <div className='flex w-full justify-center'>
          <Link to='/' className='flex-col items-center'>
            <img className='mx-auto self-center w-20' src="/images/logo.png"></img>
            <h1 className='mx-auto self-center text-poroporo font-bold text-xl'>Tuohunga</h1>
          </Link>
        </div>
      </>
    )
  }
}

export default Header
