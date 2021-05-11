import React, { useState } from 'react'
import { editRoom } from '../../apis/rooms'

function MakeAvailableButton (props) {
  const [isAvailable, setIsAvailable] = useState(props.available)
  const roomId = props.room
  let availableNumber = 0

  function clickHandler () {
    setIsAvailable(!isAvailable)

    // eslint-disable-next-line no-lone-blocks
    { isAvailable

      ? availableNumber = 0
      : availableNumber = 1

    editRoom(roomId, availableNumber)

    }
  }
  return (
    <button onClick={clickHandler}>Make {isAvailable ? 'unavailable' : 'available'}</button>
  )
}

export default MakeAvailableButton
