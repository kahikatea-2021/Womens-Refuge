import React from 'react'
import MakeAvailableButton from '../Buttons/MakeAvaiableButton'

function ManageRoom (props) {
  return (
    <>
      <p>Room {props.n}</p>
      <p>{props.room.description}</p>
      <MakeAvailableButton available={props.room.available} room={props.n}/>
    </>
  )
}

export default ManageRoom
