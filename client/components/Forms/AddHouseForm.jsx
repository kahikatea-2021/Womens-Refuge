import React from 'react'

function AddHouseForm () {
  return (
    <>
      <h1>ADD A HOUSE</h1>
      <form>
        <label htmlFor='region'>Region:</label>
        <select isRequired id='region'>
          <option value='' disabled selected>Select...</option>
          <option value='Northland'>Northland</option>
          <option value='Auckland'>Auckland</option>
          <option value='Bay of Plenty'>Bay of Plenty</option>
          <option value='Waikato'>Waikato</option>
          <option value='Gisborne'>Gisborne</option>
          <option value='Taranaki'>Taranaki</option>
          <option value='Hawke&apos;s Bay'>Hawke&apos;s Bay</option>
          <option value='Whanganui - Manawatu'>Whanganui - Manawatu</option>
          <option value='Wellington'>Wellington</option>
          <option value='Nelson'>Nelson</option>
          <option value='Marlborough'>Marlborough</option>
          <option value='Canterbury'>Canterbury</option>
          <option value='West Coast'>West Coast</option>
          <option value='Otago'>Otago</option>
          <option value='Southland'>Southland</option>
        </select>
        <label htmlFor='name'>House Name:</label>
        <input isRequired id='name' type='text'></input>
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
