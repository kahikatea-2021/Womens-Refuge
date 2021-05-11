import React from 'react'
import { useHistory } from 'react-router-dom'

export default function NorthIslandButton () {
  const history = useHistory()
  function handleClick () {
    history.push('/northisland')
  }
  return (
    <>
      <div className="flex w-full">

        <button className="shadow-xl mx-auto m-2 py-4 md:w-1/3 w-2/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out" onClick={handleClick}>North Island</button>

      </div>
    </>
  )
}
