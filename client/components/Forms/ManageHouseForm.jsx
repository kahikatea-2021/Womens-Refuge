import React from 'react'

export function ManageHouseForm (house) {
  const [form, setForm] = useState(props.formData || {
    phone1: '',
    phone2: '',
    notes: ''
  })

  return (

    <>
      <form>
        <label htmlFor='phone1'>Primary Contact Number: </label>
        <input id='phone1' value={house.house.phone_1} type='text'></input>
        <label htmlFor='phone2'>Secondary Contact Number: </label>
        <input id='phone2' type="text" value={house.house.phone_2}></input>
        <label htmlFor='notes'>Notes: </label>
        <textarea id='notes' type="text" value={house.house.notes}></textarea>
        <button >SUBMIT</button>
      </form>
    </>
  )
}

// export default ManageHouseForm
