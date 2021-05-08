import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { addNewHouse, getRegionNames } from './addHouseHelper'

function AddHouseForm () {
  const [regions, setRegions] = useState(null)
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
        history.push('/rooms/add/' + id)
        return null
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getRegionNames('all')
      .then(results => {
        console.log(results)
        setRegions(results)
        return null
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <h1>ADD A HOUSE</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor='region_id'>Region:</label>
        {regions && <select isRequired value={form.region_id} onChange={handleChange} name="region_id" id='region'>
          <option value='' disabled>Select Region</option>
          {regions.map(region => {
            return <option value={region.id} key={region.id}>{region.region}</option>
          })}
        </select>}
        <label htmlFor='name'>House Name:</label>
        <input isRequired id='name' name="name" type='text' onChange={handleChange}></input>
        <label htmlFor='phone_1'>Primary Contact Number:</label>
        <input id='phone1' type='text' name="phone_1" onChange={handleChange}></input>
        <label htmlFor='phone_2'>Secondary Contact Number:</label>
        <input id='phone2' type='text' name="phone_2" onChange={handleChange}></input>
        <label htmlFor='notes'>Notes:</label>
        <textarea onChange={handleChange} name="notes" id='notes' placeholder='Optional notes about room availabitity, usually used by refuge cooridinators.'></textarea>
        <button type='button' onClick={onSubmit}>NEXT</button>
      </form>
    </>
  )
}

export default AddHouseForm
