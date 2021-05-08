import React from 'react'

function ManageHouseForm (house) {
  return (

    <>
      <form>
        <label htmlFor='phone1'>Primary Contact Number: </label>
        <input id='phone1' value={house.house.phone_1} type='text'></input>
        <label htmlFor='phone2'>Secondary Contact Number: </label>
        <input id='phone2' type="text" value={house.house.phone_2}></input>
        <label htmlFor='notes'>Notes: </label>
        <textarea id='notes' type="text" value={house.house.notes}></textarea>
      </form>
    </>
  )
}

export default ManageHouseForm
