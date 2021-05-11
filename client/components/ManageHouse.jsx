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
  const { isLoading, isAuthenticated, user } = useAuth0()
  useEffect(() => {
    if (isAuthenticated) {
      getHouseById(houseId)
        .then(results => {
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
  } else if (ourUser && (Number(ourUser.house_id) !== Number(houseId) && !ourUser.isMasterAdmin)) {
    console.log(ourUser?.house_id, houseId)
    return <p>Unauthorised access</p>
  }
  return (

    <>
      {house && <div>
        <h1>Manage {house[0].name}</h1>
        {house[0] && house.map((room, i) => {
          return <div key={i}>
            <ManageRoomForm room={room} n={i + 1} />
          </div>
        })}
        <ManageHouseForm house={house[0]} />
      </div>}
    </>
  )
}

export default ManageHouse
