import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addRoom } from '../../apis/rooms'
import { Link, useParams } from 'react-router-dom'

function AddRoomForm () {
  const [addedRooms, setAddedRooms] = useState([])
  const house = useSelector(state => state.house)
  const [form, setForm] = useState({
    house_id: house.id,
    description: '',
    available: false
  })

  function handleChange (evt) {
    const { name, value } = evt.target
    setForm({ ...form, [name]: value })
  }

  function handleAddroom () {
    addRoom(form)
      .then(() => {
        setAddedRooms([...addedRooms, form])
        return null
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      {!house.name ? <p>No House Selected</p> : <div>
        <h1>ADD A ROOM</h1>
        <form>
          <label htmlFor='house'>House:</label>
          <input readOnly isRequired id='house' value={house.name} type='text'></input>
          <label htmlFor='description'>Description:</label>
          <textarea isRequired id='notes' name="description" placeholder='E.g: 1 queen bed, 2 single beds.' value={form.description} onChange={handleChange}></textarea>
          <button type='button' onClick={handleAddroom}>{addedRooms.length <= 0 ? 'ADD ROOM' : 'ADD ANOTHER'}</button>
          <Link to={`/house/${house.name}`} ><button type='button'>FINISHED</button></Link>
        </form>
        {addedRooms.length > 0 && <h1>Rooms Added</h1>}
        <ul>
          {addedRooms.map((room, i) => {
            return <li key={i}>description: {room.description}</li>
          })}
        </ul>
      </div>}
    </>
  )
}

export default AddRoomForm
