import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { addNewHouse, getRegionNames } from './addHouseHelper'
import { useAuth0 } from '@auth0/auth0-react'

function AddHouseForm () {
  const regions = useSelector(state => state.regions)
  const { isLoading, isAuthenticated, user } = useAuth0()

  const [form, setForm] = useState({
    name: '',
    region_id: '',
    phone_1: '',
    phone_2: '',
    notes: ''
  })

  const history = useHistory()

  function handleChange (evt) {
    const { name, value } = evt.target
    setForm({ ...form, [name]: value })
  }

  function onSubmit (evt) {
    evt.preventDefault()

    console.log(form)
    addNewHouse(form)
      .then(id => {
        history.push('/rooms/add/')
        return null
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (!regions) {
      getRegionNames('all')
        .catch(err => console.log(err))
    }
  }, [])

  if (!isAuthenticated) {
    return <p>Unauthorised access</p>
  }

  if (isLoading) {
    return <img src="/images/loading.gif"></img>
  }

  if (isAuthenticated && user) {
    return (
      <>
        <h1 className='font-extrabold'>ADD A HOUSE</h1>
        <form onSubmit={onSubmit}>
          <label className='font-bold' htmlFor='region_id'>Region:</label>
          {regions && <select value={form.region_id} onChange={handleChange} name="region_id" id='region'>
            <option value='' disabled>Select Region</option>
            {regions.map(region => {
              return <option value={region.id} key={region.id}>{region.region}</option>
            })}
          </select>}
          <label className='font-bold'htmlFor='name'>House Name:</label>
          <input id='name' name="name" type='text' onChange={handleChange}></input>
          <label className='font-bold' htmlFor='phone_1'>Primary Contact Number:</label>
          <input id='phone1' type='text' name="phone_1" onChange={handleChange}></input>
          <label className='font-bold' htmlFor='phone_2'>Secondary Contact Number:</label>
          <input id='phone2' type='text' name="phone_2" onChange={handleChange}></input>
          <label className='font-bold' htmlFor='notes'>Notes:</label>
          <textarea onChange={handleChange} name="notes" id='notes' placeholder='Optional notes about room availabitity, usually used by refuge coordinators.'></textarea>
          <button className='font-bold' type='button' onClick={onSubmit}>NEXT</button>
          <button className='font-bold' type='button' onClick={() => { history.push('/') }}>CANCEL</button>
        </form>

      </>
    )
  }
}

export default AddHouseForm
