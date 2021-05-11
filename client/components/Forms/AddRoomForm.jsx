import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addRoom } from '../../apis/rooms'
import { Link } from 'react-router-dom'

function AddRoomForm () {
  const [addedRooms, setAddedRooms] = useState([])
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
        setAddedRooms([...addedRooms, form])
        setForm({ ...form, description: '' })

        return null
      })
      .catch(err => console.log(err))
  }

  return (
    <>

      <div className="flex justify-center flex-col gap-6 mx-auto md:justify-start md:w-1/3">

        <p className='text-center text-base md:text-xl'><b>In Progress:</b></p>
        {!house.name ? <h1 className='flex justify-center font-extrabold my-8 mt-20 text-xl md:text-2xl'>No House Selected</h1> : <div>

          <p className="text-center text-3xl md:text-5xl font-bold my-1 md:my-2">{house.name} House</p>

          <br />

          <p className='text-left text-base md:text-xl'><b>Primary Number: </b>{house.phone_1}</p>
          {house.phone_2 ? <p className='text-left text-base md:text-xl'><b>Secondary Number:</b> {house.phone_2}</p> : <p className='text-left text-base md:text-xl'><b>Secondary Number: </b>Not Provided </p>}

          {house.notes ? <p className='text-left text-base md:text-xl'><b>Notes:</b> {house.notes}</p> : <p className='text-left text-base md:text-xl'><b>Description: </b>Not Provided</p>}
          <br />

          <form>

            <ul>
              {addedRooms.map((room, i) => {
                return <li key={i}>
                  <div className='text-justify flex flex-row mt-8 border-4 border-purple-300 w-3/3 md:w-4/5 rounded-lg p-1 mb-2 my-4 space-x-2'>
                    <div className='font-bold w-1/3'>Room {i + 1}:</div>
                    <div className='w-2/3'>{room.description}</div>
                  </div></li>
              })}
            </ul>

            <div className='flex flex-row md:space-x-4 mt-8'>
              <label htmlFor='description'><b>Room {addedRooms.length + 1} Details:</b></label>

              <input onChange={handleChange} value={form.description} placeholder="E.g. Two single beds" id='description' name="description" type="text" className="mt-1 block w-2/3"/>

              <button className="md:py-3 md:text-base md:w-40 py-2 self-center bg-poroporo hover:bg-poroporo text-white text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out" onClick={handleAddroom}>Add</button>

            </div>
            <br />

            <br />
            <br />

            {addedRooms.length <= 0 ? '' : <button className="m-2 py-4 md:w-1/3 w-2/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out"><Link className="self-center" to={`/house/${house.name}`}>Submit</Link></button>}

          </form>

        </div>}
      </div>
    </>
  )
}

export default AddRoomForm
