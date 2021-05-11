import React from 'react'

export default function ManageHouseForm (props) {
  return (
    <>
      <div className="flex justify-center flex-col mx-auto w-full  md:justify-start md:w-1/3">
        <label className="block"><span className="text-gray-700 font-bold ">Primary Contact Number: </span></label>
        <input className='rounded-lg w-full mt-2' id='phone1' name='phone_1' value={props.house.phone_1} type='text' onChange={(event) => { props.handleChange(event, props.house.id) }}></input>

        <label className='mt-4' htmlFor='phone2 '>Secondary Contact Number: </label>
        <input className='rounded-lg mt-2' id='phone2' name='phone_2' type="text" value={props.house.phone_2} onChange={(event) => { props.handleChange(event, props.house.id) }}></input>

        <label className='mt-4' htmlFor='notes'>Notes: </label>
        <textarea className='mt-2 rounded-lg block w-full' id='notes' name='notes' rows="5" type="text" value={props.house.notes} onChange={(event) => { props.handleChange(event, props.house.id) }}></textarea>
      </div>
    </>
  )
}
