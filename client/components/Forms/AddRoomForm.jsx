import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addRoom } from '../../apis/rooms'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import MakeAvailableButton from '../Buttons/MakeAvaiableButton'

function AddRoomForm () {
  const regions = useSelector(state => state.regions)
  const [addedRooms, setAddedRooms] = useState([])
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const house = useSelector(state => state.house)
  const [form, setForm] = useState({
    house_id: house.id,
    description: '',
    available: true // fix this later
  })

  function handleChange (evt) {
    const { name, value } = evt.target
    setForm({ ...form, [name]: value })
  }

  function handleAddroom (e) {
    e.preventDefault()
    addRoom(form)
      .then(() => {
        console.log(form)
        setAddedRooms([...addedRooms, form])
        setForm({ ...form, description: '' })
        return null
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <p className='text-center text-base md:text-xl'><b>In Progress:</b></p>
      {!house.name ? <h1 className='flex justify-center font-extrabold my-8 mt-20 text-xl md:text-2xl'>No House Selected</h1> : <div>

        <p className="text-center text-3xl md:text-5xl font-bold my-1 md:my-2">{house.name} House</p>

        <br />

        <p className='text-center text-base md:text-xl'><b>Primary Number: </b>{house.phone_1}</p>
        {house.phone_2 ? <p className='text-center text-base md:text-xl'><b>Secondary Number:</b> {house.phone_2}</p> : <p className='text-center text-base md:text-xl'><b>Secondary Number: </b>Not Provided </p>}

        {house.notes ? <p className='text-center text-base md:text-xl'><b>Notes:</b> {house.notes}</p> : <p className='text-center text-base md:text-xl'><b>Description: </b>Not Provided</p>}
        <br />

        <div className='flex justify-center items-center'>

          <form onSubmit={handleAddroom}>

            <ul>
              {addedRooms.map((room, i) => {
                return <li className="text-center" key={i}><b>Room {i + 1}:</b> {room.description}</li>
              })}
            </ul>

            <br />

            <button className="md:py-3 md:text-base md:w-24 py-2 self-center bg-poroporo hover:bg-poroporo text-white text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">{addedRooms.length <= 0 ? <p>Add Room 1 Details:</p> : <p>Add Room {addedRooms.length + 1} Details</p>}</button>

            <br />

            <input className="shadow appearance-none border w-full rounded py-3 px-7 text-grey-darker" required id='notes' name="description" placeholder='E.g: 1 queen bed, 2 single beds.' value={form.description} onChange={handleChange} type="text" />

            <br />
            <br />

            {addedRooms.length <= 0 ? '' : <button className="m-2 py-4 md:w-1/3 w-2/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out"><Link className="self-center" to={`/house/${house.name}`}>Submit</Link></button>}

          </form>

        </div>
      </div>}
    </>
  )
}

export default AddRoomForm
