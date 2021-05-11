import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './Buttons/LogoutButton'
import LoadingIcon from './LoadingIcon'
import ViewAllButton from './Buttons/ViewAllButton'
import ManageHouseButton from './Buttons/ManageHouseButton'
import AddHouseButton from './Buttons/AddHouseButton'
import BigSearchButton from './Buttons/BigSearchButton'
import { useSelector } from 'react-redux'
import LittleSearchButton from './Buttons/LittleSearchButton'

function Header () {
  const { isLoading, isAuthenticated } = useAuth0()

  if (isLoading) {
    return <LoadingIcon />
  }
  if (isAuthenticated) {
    const ourUser = useSelector(state => state.user)
    return (
      <div className='md:flex w-full items-center content-center py-4 px-8 mb-4 bg-purple-200 shadow-lg'>
        <div className='w-full justify-start'>
          <BigSearchButton/>
        </div>
        <div className='flex w-full justify-center md:justify-center w-1/5'>
          <Link to='/' className='md:flex-col items-center'>
            <img className='mx-auto self-center w-12 md:w-20' src="/images/logo.png"></img>
            <h1 className='mx-auto self-center text-poroporo font-bold text-lg md:text-xl'>Tuohunga</h1>
          </Link>
        </div>
        <div className='mt-4 space-x-4 flex w-full justify-center md:justify-end w-4/5'>
          <LittleSearchButton />
          {ourUser?.isAdmin === 1 && <AddHouseButton />}
          {ourUser?.house_id && <ManageHouseButton text='MY WHARE' path={ourUser.house_id} />}
          <ViewAllButton />
          <LogoutButton />
        </div>
      </div>
    )
  } else {
    return (
      <>
        <div className='md:flex w-full items-center content-center py-4 px-8 mb-4 bg-purple-200'>
          <div className='flex w-full justify-center md:justify-start w-1/5'>
            <Link to='/' className='flex-row md:flex-col items-center'>
              <img className='mx-auto self-center w-12 md:w-20' src="/images/logo.png"></img>
              <h1 className='mx-auto self-center text-poroporo font-bold text-lg md:text-xl'>Tuohunga</h1>
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default Header
