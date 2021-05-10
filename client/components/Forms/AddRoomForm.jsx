import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addRoom } from '../../apis/rooms'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function AddRoomForm () {
  const [addedRooms, setAddedRooms] = useState([])
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const house = useSelector(state => state.house)
  const [form, setForm] = useState({
    house_id: house.id,
    description: '',
    available: false // fix this later
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
        <p>House: {house.name}</p>
        <h1>Add Room Details</h1>
        <br />
        <ol>Please provide details about:
          <li>- the number of rooms available in the house; and</li>
          <li>- the sleeping arrangements in each room.</li>
        </ol>
        <br />
        <form onSubmit={handleAddroom}>
        <label htmlFor='description'>Room 1 Details:</label>
          <input required id='notes' name="description" placeholder='E.g: 1 queen bed, 2 single beds.' value={form.description} onChange={handleChange} cols="40" rows="1"></input>
          <br />
          <button>{addedRooms.length <= 0 ? 'Add Room 1' : ''}</button>
          <br />
          </form>

          <form onSubmit={handleAddroom}>
        <label htmlFor='description'>Room 2 Details:</label>
          <input required id='notes' name="description" placeholder='E.g: 1 queen bed, 2 single beds.' value={form.description} onChange={handleChange} cols="40" rows="1"></input>
          <br />
          <button>{addedRooms.length <= 1 ? 'Add Room 2' : ''}</button>
          <br />
          </form>

          <form onSubmit={handleAddroom}>
        <label htmlFor='description'>Room 3 Details:</label>
          <input required id='notes' name="description" placeholder='E.g: 1 queen bed, 2 single beds.' value={form.description} onChange={handleChange} cols="40" rows="1"></input>
          <br />
          <button>{addedRooms.length <= 2 ? 'Add Room 3' : ''}</button>
          <br />
          </form>

          <form onSubmit={handleAddroom}>
        <label htmlFor='description'>Room 4 Details:</label>
          <input required id='notes' name="description" placeholder='E.g: 1 queen bed, 2 single beds.' value={form.description} onChange={handleChange} cols="40" rows="1"></input>
          <br />
          <button>{addedRooms.length <= 3 ? 'Add Room 4' : ''}</button>
          <br />
          </form>
    
        <br />
        {addedRooms.length > 0 && <h1><b>Rooms:</b></h1>}
        <ul>
          {addedRooms.map((room, i) => {
            return <li key={i}>Room {i + 1}: {room.description}</li>
          })}
        </ul>
        <br />
        <Link to={`/house/${house.name}`}><button type='button'>{addedRooms.length <= 0 ? '' : 'Submit'}</button></Link>
      </div>}
    </>
  )
}

export default AddRoomForm
