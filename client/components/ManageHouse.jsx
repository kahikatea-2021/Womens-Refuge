import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getHouseById } from '../apis/regions'
import ManageHouseForm from './Forms/ManageHouseForm'
import ManageRoomForm from './Forms/ManageRoomForm'
import { useAuth0 } from '@auth0/auth0-react'

function ManageHouse () {
  const [house, setHouse] = useState(null)
  const houseId = useParams().id
  const ourUser = useSelector(state => state.user)
  const { isLoading, isAuthenticated } = useAuth0()
  useEffect(() => {
    if (isAuthenticated) {
      getHouseById(houseId)
        .then(results => {
          console.log(results)
          setHouse(results)
          return null
        })
        .catch(err => console.log(err))
    }
  }, [houseId])

  if (isLoading) {
    return <img src="../../images/loading.gif"></img>
  }

  if (!isAuthenticated || !ourUser) {
    return <p>Unauthorised access</p>
  } else if (ourUser && (Number(ourUser.house_id) !== Number(houseId) && !ourUser.isAdmin)) {
    console.log(ourUser?.house_id, houseId)
    return <p>Unauthorised access</p>
  }

  return (

    <div >
      {house && <div className=''>
        <p className='text-center text-base md:text-xl'><b>Manage</b></p>
        <div className="flex items-center justify-center flex-col md:flex-row">
          <p className="text-center text-3xl md:text-5xl font-bold">{house[0].name}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center  space-y-8 md:space-y-0 md:space-x-8 my-8">
          {house[0] && house.map((room, i) => {
            return <div key={i} className="h-full">
              <ManageRoomForm room={room} n={i + 1} />
            </div>
          })}
        </div>
        <div>
          <ManageHouseForm house={house[0]} />
        </div>
      </div>}
    </div>
  )
}

export default ManageHouse
