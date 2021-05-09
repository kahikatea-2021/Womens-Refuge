import React, { useEffect, useState } from 'react'
// import { getRoomsByHouseId } from '../apis/houses'
import { getHouseById } from '../apis/regions'
import ManageHouseForm from './Forms/ManageHouseForm'
import ManageRoomForm from './Forms/ManageRoomForm'

function ManageHouse (houseId) {
  const [house, setHouse] = useState(null)
  useEffect(() => {
    getHouseById(houseId.houseId)
      .then(results => {
        setHouse(results)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  if (!house) {
    return <p>Loading...</p>
  }
  console.log('thid', house)
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
          <ManageRoomForm room={room} n={i + 1}/>
        </div>
      })}
      <ManageHouseForm house={house[0]}/>
    </>
  )
}

export default ManageHouse
