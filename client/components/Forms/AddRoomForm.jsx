import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addRoom } from '../../apis/rooms'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function AddRoomForm () {
  const regions = useSelector(state => state.regions)
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

    <p className='text-center text-base md:text-xl'><b>In Progress:</b></p>
      {!house.name ? <h1 className='flex justify-center font-extrabold my-8 mt-20 text-xl md:text-2xl'>No House Selected</h1> : <div>
      <p className="text-center text-3xl md:text-5xl font-bold my-1 md:my-2">{house.name} House</p>
        <br /> 

 
        <p className='text-center text-base md:text-xl'><b>{house.phone_1}</b></p>
        <p className='text-center text-base md:text-xl'><b>{house.phone_2}</b></p>
        <p className='text-center text-base md:text-xl'><b>{house.notes}</b></p>

        <br />

        <div className='flex justify-center items-center'>

 <form onSubmit={handleAddroom}>

 {addedRooms.length > 0 && <h1><b>Rooms:</b></h1>}
        <ul>
          {addedRooms.map((room, i) => {
            return <li key={i}>Room {i + 1}: {room.description}</li>
          })}
        </ul>
        <br />
    <input required id='notes' name="description" placeholder='E.g: 1 queen bed, 2 single beds.' value={form.description} onChange={handleChange} type="text" />

    <button   className="py-2 ml-4 self-start bg-poroporo hover:bg-poroporo text-white w-16 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">{addedRooms.length <= 0 ? 'Add First Room' : 'Add Another Room'}</button>

    
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
