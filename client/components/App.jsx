import React from 'react'
import { Route, useHistory } from 'react-router-dom'
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
import { setUserState } from './userStateHelper'
import { useDispatch, useSelector } from 'react-redux'
import LoadingIcon from './LoadingIcon'
import BackButton from './Buttons/BackButton'
import RefineSearch from './RefineSearch'

function App () {
  const { isAuthenticated, isLoading, user, getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()
  const isWaiting = useSelector(state => state.wait)
  const ourUser = useSelector(state => state.user)
  const history = useHistory()

  if (isLoading) {
    return (
      <>
        <div className='md:flex w-full items-center content-center py-4 px-8 mb-4 bg-purple-200'>
          <div className='flex w-full justify-center'>
            <div to='/' className='flex-col items-center'>
              <img className='mx-auto self-center w-20' src="/images/logo.png"></img>
              <h1 className='mx-auto self-center text-poroporo font-bold text-xl'>Tuohunga</h1>
            </div>
          </div>
        </div>
        <LoadingIcon />
      </>
    )
  }

  if (isAuthenticated && !ourUser) {
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
          <div className='h-screen flex flex-col'>
            <Header />
            {!isAuthenticated && <Login />}
            {<Route path='/*' component={BackButton} />}
            <main className='flex flex-col h-full pb-0 pt-4 px-8'>
              <Route exact path='/' component={Home} />
              <Route path='/northisland' component={NorthIsland} />
              <Route path='/southisland' component={SouthIsland} />
              <Route exact path='/houses' component={AllSafehouses} />
              <Route path='/region/:name' component={Region} />
              <Route exact path='/house/:name' component={House} />
              <Route path='/house/manage/:id' component={ManageHouse} />
              <Route path='/houses/add' component={AdminAddHouse} />
              <Route path='/rooms/add' component={AdminAddRoom} />
              <Route path='/search' component={RefineSearch} />
              <Footer />
            </main>

          </div>
        </div>}
    </>

  )
}

export default App
