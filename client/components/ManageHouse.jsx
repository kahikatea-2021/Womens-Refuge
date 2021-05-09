import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
// import { getRoomsByHouseId } from '../apis/houses'
import { getHouseById } from '../apis/regions'
import ManageHouseForm from './Forms/ManageHouseForm'
import ManageRoomForm from './Forms/ManageRoomForm'
import { useAuth0 } from '@auth0/auth0-react'

function ManageHouse () {
  const [house, setHouse] = useState(null)
  const houseId = useParams().id
  const ourUser = useSelector(state => state.user)
  const { isLoading, user, isAuthenticated } = useAuth0()
  console.log('houseid', houseId)
  useEffect(() => {
    if (isAuthenticated && !house) {
      getHouseById(houseId)
        .then(results => {
          setHouse(results)
          return null
        })
        .catch(err => console.log(err))
    }
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!isAuthenticated) {
    return <p>Unauthorised access</p>
  }

  if (!house) {
    return <p>Loading...</p>
  }
  return (

    <>
      <h1>Manage {house[0].name}</h1>
      {/* {house.map(room => {
        return <p key={room.id}>
          <ManageRoomForm room={room}/>
        </p>
      })} */}
      {house[0] && house.map((room, i) => {
        return <div key={i}>
          <ManageRoomForm room={room} n={i + 1} />
        </div>
      })}
      <ManageHouseForm house={house[0]} />
    </>
  )
}

export default ManageHouse
