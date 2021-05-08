import React, { useEffect, useState } from 'react'
import { getAllRegions } from '../../apis/regions'

function AddHouseForm () {
  const [regions, setRegions] = useState(null)
  const [form, setForm] = useState({
    name: '',
    region: '',
    phone_1: '',
    phone_2: '',
    notes: ''
  })

  function onChange (evt) {
    const { name, value } = evt.target
    setForm({ ...form, [name]: value })
  }

  useEffect(() => {
    getAllRegions('all')
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
      <form>
        <label htmlFor='region'>Region:</label>
        {regions && <select isRequired value={form.region} onChange={onChange} name="region" id='region'>
          <option value='' disabled>Select Region</option>
          {regions.map(region => {
            return <option value={region.id} key={region.id}>{region.region}</option>
          })}
        </select>}
        <label htmlFor='name'>House Name:</label>
        <input isRequired id='name' name="" type='text'></input>
        <label htmlFor='phone1'>Primary Contact Number:</label>
        <input id='phone1' type='text'></input>
        <label htmlFor='phone2'>Secondary Contact Number:</label>
        <input id='phone2' type='text'></input>
        <label htmlFor='notes'>Notes:</label>
        <textarea id='notes' placeholder='Optional notes about room availabitity, usually used by refuge cooridinators.'></textarea>
        <button type='button'>NEXT</button>
      </form>
    </>
  )
}

export default AddHouseForm
