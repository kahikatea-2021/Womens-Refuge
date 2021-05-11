import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { getHouseById } from '../apis/regions'
import ManageHouseForm from './Forms/ManageHouseForm'
import ManageRoomForm from './Forms/ManageRoomForm'
import { useAuth0 } from '@auth0/auth0-react'
import { updateHouseAndRooms } from '../apis/houses'

function ManageHouse () {
  const [house, setHouse] = useState(null)
  const [rooms, setRooms] = useState(null)
  const [houseInfo, setHouseInfo] = useState(null)
  const houseId = useParams().id
  const ourUser = useSelector(state => state.user)
  const { isLoading, isAuthenticated } = useAuth0()
  const history = useHistory()
  useEffect(() => {
    if (isAuthenticated) {
      getHouseById(houseId)
        .then(results => {
          const roomInfo = results.map(({ description, house_id, room_id, available }) => ({ id: room_id, house_id, description, available }))
          setHouseInfo({
            id: results[0].house_id,
            region_id: results[0].region_id,
            name: results[0].name,
            phone_1: results[0].phone_1,
            phone_2: results[0].phone_2,
            notes: results[0].notes
          })
          setRooms(roomInfo)
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
    return <p>Unauthorised access</p>
  }

  function handleRoomCallback (evt, id) {
    const updatedRooms = rooms.map(room => {
      if (Number(id) === Number(room.id)) {
        return { ...room, description: evt.target.value }
      } else {
        return room
      }
    })
    setRooms(updatedRooms)
  }

  function handleHouseCallback (evt, id) {
    const { name, value } = evt.target
    setHouseInfo({ ...houseInfo, [name]: value })
  }

  function handleSubmit (evt) {
    evt.preventDefault()
    updateHouseAndRooms(rooms, houseInfo)
      .then(() => {
        history.push('/house/' + houseInfo.name)
        return null
      })
      .catch(err => console.log(err))
  }

  return (

    <div >
      {house && <div className="flex flex-col">
        <p className='text-center text-base md:text-xl'><b>Manage</b></p>
        <div className="flex items-center justify-center flex-col md:flex-row">
          <p className="text-center text-3xl md:text-5xl font-bold">{house[0].name}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center  space-y-8 md:space-y-0 md:space-x-8 my-8">
          {house[0] && rooms.map((room, i) => {
            return <div key={i} className="h-full">
              <ManageRoomForm room={room} n={i + 1} handleChange={handleRoomCallback} />
            </div>
          })}
        </div>
        <div>
          <ManageHouseForm house={houseInfo} handleChange={handleHouseCallback} />
        </div>
        <button className='mx-auto mt-6 font-bold py-2 md:py-3 md:text-base self-center bg-poroporo hover:bg-poroporo text-white w-20 md:w-32 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out' type='button' onClick={handleSubmit}>SUBMIT</button>
      </div>}
    </div>
  )
}

export default ManageHouse
