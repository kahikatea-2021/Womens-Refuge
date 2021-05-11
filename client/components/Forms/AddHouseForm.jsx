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
        {/* <form onSubmit={onSubmit}>
        <div class="container mx-auto px-4">
        <label className='font-bold object-left-top' htmlFor='region_id'>Region:</label>
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
          </div>
        </form> */}
        <div className="flex justify-center flex-col gap-6 mx-auto w-1/3  md:justify-start w-1/5'">
          <h1 className='font-extrabold'>ADD A HOUSE</h1>
          {regions && <select className='mt-1 block w-2/3' value={form.region_id} onChange={handleChange} name="region_id" id='region'>
            <option value='' disabled>Select Region</option>
            {regions.map(region => {
              return <option value={region.id} key={region.id}>{region.region}</option>
            })}
          </select>}
          <label className="block">
            <span className="text-gray-700">House name</span>
            <input className="mt-1 block w-2/3" id='name' name="name" type='text' onChange={handleChange}/>
          </label>
          <label className="block">
            <span className="text-gray-700">Phone 1</span>
            <input onChange={handleChange} name="phone_1" type="text" className="mt-1 block w-2/3"/>
          </label>
          <label className="block">
            <span className="text-gray-700">Phone 2</span>
            <input onChange={handleChange} name="phone_2" type="text" className="mt-1 block w-2/3"/>
          </label>
          <label className="block">
            <span className="text-gray-700">Notes</span>
            <textarea onChange={handleChange} name="notes" className=" mt-1 block w-2/3" rows="5"></textarea>
          </label>
          <div>
            <button className='mr-20 font-bold py-2 md:py-3 md:text-base self-center bg-poroporo hover:bg-poroporo text-white w-20 md:w-32 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out' type='button' onClick={onSubmit}>NEXT</button>
            <button className='ml-20 font-bold py-2 md:py-3 md:text-base self-center bg-poroporo hover:bg-poroporo text-white w-20 md:w-32 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out' type='button' onClick={() => { history.push('/') }}>CANCEL</button>
          </div>
        </div>

      </>
    )
  }
}

export default AddHouseForm
