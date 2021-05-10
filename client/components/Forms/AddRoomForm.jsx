import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addRoom } from '../../apis/rooms'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function AddRoomForm () {
  const [addedRooms, setAddedRooms] = useState([])
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
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

  function handleAddroom (e) {
    console.log('hi')
    e.preventDefault()
    addRoom(form)
      .then(() => {
        setAddedRooms([...addedRooms, form])
        setForm({ ...form, description: '' })
        return null
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      {!house.name ? <p>No House Selected</p> : <div>
        <h1>ADD A ROOM</h1>
        <form onSubmit={handleAddroom}>
          <label htmlFor='house'>House:</label>
          <input readOnly isrequired='true' id='house' value={house.name} type='text'></input>
          <label htmlFor='description'>Description:</label>
          <input required id='notes' name="description" placeholder='E.g: 1 queen bed, 2 single beds.' value={form.description} onChange={handleChange}></input>
          <button >{addedRooms.length <= 0 ? 'ADD ROOM' : 'ADD ANOTHER'}</button>

        </form>
        <Link to={`/house/${house.name}`} ><button type='button'>FINISHED</button></Link>
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
