import React from 'react'
import { Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './Login'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import NorthIsland from './NorthIsland'
import SouthIsland from './SouthIsland'
import AllSafehouses from './AllSafehouses'
import Region from './Region'
import House from './House'
import ManageHouse from './ManageHouse'
import AdminAddHouse from './AdminAddHouse'
import AdminAddRoom from './AdminAddRoom'
// import AddHouseForm from './Forms/AddHouseForm'
import { setUserState } from './userStateHelper'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from './ErrorMessage'
import LoadingIcon from './LoadingIcon'
// import { setErrorMsg } from '../actions/error'

// import AddRoomForm from './Forms/AddRoomForm'

function App () {
  const { isAuthenticated, isLoading, user, getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()
  const isWaiting = useSelector(state => state.wait)

  if (isLoading) {
    return (
      <>
        <div className='flex w-full justify-center'>
          <div className='flex-col items-center'>
            <img className='mx-auto self-center w-20' src="../../images/logo.png"></img>
            <h1 className='mx-auto self-center font-bold text-poroporo text-xl'>Tuohunga</h1>
          </div>
        </div>
        <LoadingIcon/>
      </>
    )
  }

  if (isAuthenticated) {
    getAccessTokenSilently()
      .then(token => {
        setUserState(user, token, dispatch)
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      {isWaiting ? <LoadingIcon />
        : <div>
          <div className='relative h-screen'>
            <Header />
            <ErrorMessage />
            {!isAuthenticated && <Login />}
            <Route exact path='/' component={Home} />
            <Route path='/northisland' component={NorthIsland} />
            <Route path='/southisland' component={SouthIsland} />
            <Route exact path='/houses' component={AllSafehouses} />
            <Route path='/region/:name' component={Region} />
            <Route exact path='/house/:name' component={House} />
            <Route path='/house/manage/:id' component={ManageHouse} />
            <Route path='/houses/add' component={AdminAddHouse} />
            <Route path='/rooms/add' component={AdminAddRoom} />
            <Footer />
          </div>
        </div>}
    </>

  )
}

export default App
