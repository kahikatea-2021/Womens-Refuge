import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addRoom } from '../../apis/rooms'
import { useHistory } from 'react-router-dom'

function AddRoomForm () {
  const history = useHistory()
  const [addedRooms, setAddedRooms] = useState([])
  const house = useSelector(state => state.house)
  const blankForm = {
    house_id: house.id,
    description: '',
    available: true, // fix this later
    single_beds: 0,
    double_beds: 0,
    queen_beds: 0,
    king_beds: 0,
    bunk_beds: 0
  }
  const [form, setForm] = useState(blankForm)

  function handleChange (evt) {
    const { name, value } = evt.target
    setForm({ ...form, [name]: value })
  }

  function handleBed (evt, button) {
    evt.preventDefault()
    const { name } = evt.target
    const value = form[name]
    if (button === 'increase') {
      setForm({ ...form, [name]: Number(value) + 1 })
    } else if (button === 'decrease' && value > 0) {
      setForm({ ...form, [name]: Number(value) - 1 })
    }
  }

  function handleAddroom (e) {
    console.log('addroom')
    e.preventDefault()
    addRoom(form)
      .then(() => {
        setAddedRooms([...addedRooms, form])
        setForm(blankForm)
        return null
      })
      .catch(err => console.log(err))
  }

  return (
    <>

      <div className="flex justify-center flex-col gap-6 mx-auto md:justify-start md:w-1/3">

        <p className='text-center text-base md:text-xl'><b>In Progress:</b></p>
        {!house.name ? <h1 className='flex justify-center font-extrabold my-8 mt-20 text-xl md:text-2xl'>No House Selected</h1> : <div>

          <p className="text-center text-3xl md:text-5xl font-bold my-1 md:my-2">{house.name}</p>

          <br />
          <p className='text-left text-base md:text-xl'><b>Region: </b>{house.region}</p>
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
                    {room.single_beds ? <p>{`Single Beds: ${room.single_beds}`}</p> : null}
                    {room.double_beds ? <p>{`Double Beds: ${room.double_beds}`}</p> : null}
                    {room.queen_beds ? <p>{`Queen Beds: ${room.queen_beds}`}</p> : null}
                    {room.king_beds ? <p>{`King Beds: ${room.king_beds}`}</p> : null}
                    {room.bunk_beds ? <p>{`Bunk Beds: ${room.bunk_beds}`}</p> : null}
                  </div></li>
              })}
            </ul>

            <div className='flex flex-row md:space-x-4 mt-8'>
              <label htmlFor='description'><b>Room {addedRooms.length + 1} Details:</b></label>
              <input onChange={handleChange} value={form.description} placeholder="E.g. Two single beds" id='description' name="description" type="text" className="mt-1 block w-2/3" />
              <br></br>
              <p>Single Beds: {form.single_beds}</p><button name='single_beds' onClick={(event) => handleBed(event, 'increase')}>+</button><button name='single_beds' onClick={(event) => handleBed(event, 'decrease')}>-</button>
              <br></br>
              <p>Double Beds: {form.double_beds}</p><button name='double_beds' onClick={(event) => handleBed(event, 'increase')}>+</button><button name='double_beds' onClick={(event) => handleBed(event, 'decrease')}>-</button>
              <br></br>
              <p>Queen Beds: {form.queen_beds}</p><button name='queen_beds' onClick={(event) => handleBed(event, 'increase')}>+</button><button name='queen_beds' onClick={(event) => handleBed(event, 'decrease')}>-</button>
              <br></br>
              <p>King Beds: {form.king_beds}</p><button name='king_beds' onClick={(event) => handleBed(event, 'increase')}>+</button><button name='king_beds' onClick={(event) => handleBed(event, 'decrease')}>-</button>
              <br></br>
              <p>Bunk Beds: {form.bunk_beds}</p><button name='bunk_beds' onClick={(event) => handleBed(event, 'increase')}>+</button><button name='bunk_beds' onClick={(event) => handleBed(event, 'decrease')}>-</button>
              <br></br>
              <button className="md:py-3 md:text-base md:w-40 py-2 self-center bg-poroporo hover:bg-poroporo text-white text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out" onClick={handleAddroom}>Add Room</button>
            </div>
            <br />
            <br />
            <br />
            {addedRooms.length <= 0 ? '' : <button onClick={() => { history.push(`/house/${house.name}`) }} className="m-2 py-4 md:w-1/3 w-2/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">Submit</button>}
          </form>

        </div>}
      </div>
    </>
  )
}

export default AddRoomForm
