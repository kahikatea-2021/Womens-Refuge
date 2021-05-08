import React, { useState } from 'react'

function MakeAvailableButton (props) {
  const [isAvailable, setIsAvailable] = useState(props.available)

  function clickHandler () {
    setIsAvailable(!isAvailable)
  }
  return (
    <button onClick={clickHandler}>Make {isAvailable ? 'unavailable' : 'available'}</button>
  )
}

export default MakeAvailableButton
