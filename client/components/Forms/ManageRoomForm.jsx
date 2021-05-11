
import React, { useState } from 'react'
// import MakeAvailableButton from '../Buttons/MakeAvailableButton'
import { editRoom } from '../../apis/rooms'


function ManageRoom (props) {
  const [available, setAvailable] = useState(props.room.available)

  function handleCheckbox (evt) {
    setAvailable(evt.target.checked)
    editRoom(Number(props.room.room_id), evt.target.checked)
  }

  return (
    <>
      {/* <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8 my-8'> */}

      {/* <div className='border-4 border-purple-300 shadow-lg w-2/3 md:w-1/5 rounded-lg p-1 mb-2 my-4'> */}
      <div className='h-full border-4 border-purple-300 shadow-lg rounded-lg h-auto p-2'>
        <div className='h-full font-bold text-center text-base '>Room{props.n}</div>
        {available ? <i className='text-grass'>Available</i> : <b className='text-red-500'>Unavailable</b>}
        <div className="m-2 my-4"></div><div>{props.room.description}</div>
        {/* <button className='mt-6 font-bold py-2 md:py-3 md:text-base self-center bg-poroporo hover:bg-poroporo text-white w-20 md:w-32 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out'><MakeAvailableButton available={props.room.available} room={props.n}/>
        </button> */}

        <div className="m-2 flex items-center">
          <label htmlFor="available">Available</label>
          <input onChange={handleCheckbox} checked={available} className="mx-1" type="checkbox" name="available" id="available" />
        </div>
      </div>
      {/* </div> */}

      {/* </div> */}
    </>
  )
}

export default ManageRoom
