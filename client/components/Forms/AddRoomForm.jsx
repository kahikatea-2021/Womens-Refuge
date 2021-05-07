import React from 'react'

function AddRoomForm (houseName) {
  return (
    <>
      <h1>ADD A ROOM</h1>
      <form>
        <label htmlFor='house'>House:</label>
        <input readOnly isRequired id='house' type='text'>{houseName}</input>
        <label htmlFor='description'>Description:</label>
        <textarea isRequired id='notes' placeholder='E.g: 1 queen bed, 2 single beds.'></textarea>
        <button type='button'>ADD ANOTHER ROOM</button>
        <button type='button'>FINISHED</button>
      </form>
    </>
  )
}

export default AddRoomForm
