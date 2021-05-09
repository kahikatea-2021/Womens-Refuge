import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
// import { getRoomsByHouseId } from '../apis/houses'
import { getHouseById } from '../apis/regions'
import ManageHouseForm from './Forms/ManageHouseForm'
import ManageRoomForm from './Forms/ManageRoomForm'

function ManageHouse () {
  const [house, setHouse] = useState(null)
  const houseId = useParams().id
  console.log('houseid', houseId)
  useEffect(() => {
    getHouseById(houseId)
      .then(results => {
        setHouse(results)
        return null
      })
      .catch(err => console.log(err))
  }, [])

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
          <ManageRoomForm room={room} n={i + 1}/>
        </div>
      })}
      <ManageHouseForm house={house[0]}/>
    </>
  )
}

export default ManageHouse
