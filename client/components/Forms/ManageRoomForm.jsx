import React from 'react'
import MakeAvailableButton from '../Buttons/MakeAvaiableButton'
import MakeUnavailableButton from '../Buttons/MakeUnavailableButton'

function ManageRoom (room, n) {
  console.log('room', room, n)

  return (

    <>
      <p>Room {room.n}</p>
      <p>{room.room.description}</p>
      {!room.room.available
        ? <MakeAvailableButton />
        : <MakeUnavailableButton />
      }
    </>
  )
}

export default ManageRoom
