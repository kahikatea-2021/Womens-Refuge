import React from 'react'
import { Link } from 'react-router-dom'

export default function App () {
  return (
    <>
      <div className="items-center">
        <Link to='/southisland'>
          <button className="m-2 py-4 w-2/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">South Island</button>
        </Link>
      </div>
    </>
  )
}
