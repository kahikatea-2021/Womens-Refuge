import React, { useState } from 'react'
import { useParams } from 'react-router'
import { editHouse } from '../../apis/houses'
import { useHistory } from 'react-router-dom'
import { setErrorMsg } from '../../actions/error'
import { useDispatch } from 'react-redux'

export default function ManageHouseForm (props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const id = useParams().id
  const [form, setForm] = useState({
    phone_1: props.house.phone_1,
    phone_2: props.house.phone_2,
    notes: props.house.notes
  })

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    editHouse(id, form)
      .then(() => {
        history.push(`/house/${props.house.name}`)
        return null
      })
      .catch(err => {
        console.log(err)
        dispatch(setErrorMsg('You do not have permission to edit this house.'))
      })
  }

  return (

    <>
      <div className="flex justify-center flex-col mx-auto w-full  md:justify-start md:w-1/3">
        <label className="block">
          <span className="text-gray-700 font-bold ">Primary Contact Number: </span>
          <input className='rounded-lg w-full mt-2' id='phone1' name='phone_1' value={form.phone_1} type='text' onChange={handleChange}></input>
        </label>
        <label className='mt-4' htmlFor='phone2 '>Secondary Contact Number: </label>
        <input className='rounded-lg mt-2' id='phone2' name='phone_2' type="text" value={form.phone_2} onChange={handleChange}></input>
        <label className='mt-4' htmlFor='notes'>Notes: </label>
        <textarea className='mt-2 rounded-lg block w-full' id='notes' name='notes' rows="5" type="text" value={form.notes} onChange={handleChange}></textarea>
        <button className=' font-bold py-2 md:py-3 md:text-base self-center bg-poroporo hover:bg-poroporo text-white w-20 md:w-32 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out' type='button' onClick={handleSubmit}>SUBMIT</button>
      </div>
    </>
  )
}
