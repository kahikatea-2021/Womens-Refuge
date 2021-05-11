import React, { useState } from 'react'
import { editRoom } from '../../apis/rooms'

function MakeAvailableButton (props) {
  const [isAvailable, setIsAvailable] = useState(props.available)
  const roomId = props.room
  let availableNumber = 0

  function clickHandler () {
    setIsAvailable(!isAvailable)
    isAvailable
      ? availableNumber = 0
      : availableNumber = 1

    editRoom(roomId, availableNumber)
  }
  return (
    // <button className="h-full" onClick={clickHandler}>Make {isAvailable ? 'unavailable' : 'available'}</button>
    <input type="checkbox" name="" id="" />
  )
}

export default MakeAvailableButton
