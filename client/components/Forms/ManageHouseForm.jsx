import React, { useState } from 'react'
import { useParams } from 'react-router'
import { editHouse } from '../../apis/houses'
import { useHistory } from 'react-router-dom'

export default function ManageHouseForm (props) {
  const history = useHistory()
  const id = useParams().id
  console.log('id', id)
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
    history.push(`/house/${props.house.name}`)
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(err => console.log(err))
  }

  return (

    <>
      <form>
        <label htmlFor='phone1'>Primary Contact Number: </label>
        <input id='phone1' name='phone_1' value={form.phone_1} type='text'onChange={handleChange}></input>
        <label htmlFor='phone2'>Secondary Contact Number: </label>
        <input id='phone2' name='phone_2' type="text" value={form.phone_2} onChange={handleChange}></input>
        <label htmlFor='notes'>Notes: </label>
        <textarea id='notes' name='notes' type="text" value={form.notes} onChange={handleChange}></textarea>
        <button onClick={handleSubmit}>SUBMIT</button>
      </form>
    </>
  )
}

// export default ManageHouseForm
