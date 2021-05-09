import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function ConfirmAddHouse () {
  const house = useSelector(state => state.house)
  const [form, setForm] = useState({})
  return (
    <>
      <form>
        <label htmlFor="region_name">Region:</label>
        <input type="text" name="region_name" id="" />
        <label htmlFor="house"></label>
        <input type="text" name="house" />
        <label htmlFor="phone_1">Primary phone:</label>
        <input type="tel" name="phone_1" id="" />
        <label htmlFor="phone_2">Secondary phone:</label>
        <input type="tel" name="phone_2" id="" />
      </form>
    </>
  )
}

export default ConfirmAddHouse
