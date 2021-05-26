import React from 'react'

function ManageRoom (props) {
  return (
    <>
      {/* <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8 my-8'> */}

      {/* <div className='border-4 border-purple-300 shadow-lg w-2/3 md:w-1/5 rounded-lg p-1 mb-2 my-4'> */}
      <div className='flex flex-col items-center h-full border-4 border-purple-300 shadow-lg rounded-lg h-auto p-4 w-60 lg:w-72'>
        <div className='h-full font-bold text-center text-base '>Room{props.n}</div>
        {props.room.available ? <i className='text-grass'>Available</i> : <b className='text-red-500'>Unavailable</b>}
        <div className="m-2 my-4"></div>
        <div><textarea type="text" onChange={(event) => { props.handleChange(event, props.room.id) }} name="description" value={props.room.description} id={props.room.id} className="rounded shadow w-52 lg:w-60 resize-none" rows="2" /></div>
        {/* <button className='mt-6 font-bold py-2 md:py-3 md:text-base self-center bg-poroporo hover:bg-poroporo text-white w-20 md:w-32 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out'><MakeAvailableButton available={props.room.available} room={props.n}/>
        </button> */}

        <div className="m-2 flex items-center">
          <label htmlFor={`available-${props.room.id}`}>Available</label>
          <input onChange={(event) => { props.handleChange(event, props.room.id) }} checked={props.room.available} className="" type="checkbox" name="available" id={`available-${props.room.id}`} />
        </div>
      </div>
      {/* </div> */}

      {/* </div> */}
    </>
  )
}

export default ManageRoom
