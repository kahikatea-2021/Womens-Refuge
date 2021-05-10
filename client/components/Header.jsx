import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './Buttons/LogoutButton'
import BackButton from './Buttons/BackButton'
import LoadingIcon from './LoadingIcon'
import ViewAllButton from './Buttons/ViewAllButton'
import ManageHouseButton from './Buttons/ManageHouseButton'
import AddHouseButton from './Buttons/AddHouseButton'
import { useSelector } from 'react-redux'

function Header () {
  const { isLoading, isAuthenticated } = useAuth0()

  if (isLoading) {
    return <LoadingIcon />
  }
  if (isAuthenticated) {
    const ourUser = useSelector(state => state.user)
    console.log(ourUser)
    return (
      <div className='flex-col w-full items-center content-center pb-8'>

        <div className='flex w-full justify-center'>
          <Link to='/' className='flex-col items-center'>
            <img className='mx-auto self-center w-20' src="/images/logo.png"></img>
            <h1 className='mx-auto self-center text-poroporo font-bold text-xl'>Tuohunga</h1>
          </Link>
        </div>
        <div className='space-x-2 flex w-full justify-center'>
          <BackButton />
          {ourUser?.isMasterAdmin && <AddHouseButton />}
          {ourUser?.house_id && <ManageHouseButton />}
          <ViewAllButton />
          <LogoutButton />
        </div>
      </div>
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
