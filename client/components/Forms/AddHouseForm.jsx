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

        <div className="flex justify-center flex-col gap-6 mx-auto w-full  md:justify-start md:w-1/3">
          <h1 className='mt-8 font-extrabold text-2xl'>Add a Safehouse</h1>
          {regions && <select className='mt-1 block w-full' value={form.region_id} onChange={handleChange} name="region_id" id='region'>
            <option className='font-bold' value='' disabled>* Select Region</option>
            {regions.map(region => {
              return <option value={region.id} key={region.id}>{region.region}</option>
            })}
          </select>}
          <label className="block">
            <span className="text-gray-700 font-bold">* House Name</span>
            <input className="mt-1 block w-full rounded-lg" placeholder="E.g: Poroporo" id='name' name="name" type='text' onChange={handleChange}/>
          </label>
          <label className="block">
            <span className="text-gray-700 font-bold">* Primary Contact Number</span>
            <input onChange={handleChange} placeholder="E.g: 021 123 4567" name="phone_1" type="tel" className="mt-1 block w-full rounded-lg"/>
          </label>
          <label className="block">
            <span className="text-gray-700 font-bold">Secondary Contact Number</span>
            <input onChange={handleChange} placeholder="E.g: 027 897 2345" name="phone_2" type="tel" className="mt-1 block w-full rounded-lg"/>
          </label>
          <label className="block">
            <span className="text-gray-700 font-bold">Notes</span>
            <textarea onChange={handleChange} placeholder="E.g: A cat lives here" name="notes" className=" rounded-lg mt-1 block w-full" rows="5"></textarea>
          </label>
          <div className='space-x-2 flex justify-evenly'>
            <button className=' font-bold py-2 md:py-3 md:text-base self-center bg-purple-200 hover:bg-red-300 text-white w-20 md:w-32 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out' type='button' onClick={() => { history.push('/') }}>CANCEL</button>
            <button className='font-bold py-2 md:py-3 md:text-base self-center bg-poroporo hover:bg-poroporo text-white w-20 md:w-32 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out' type='button' onClick={onSubmit}>NEXT</button>
          </div>
        </div>

      </>
    )
  }
}

export default AddHouseForm
