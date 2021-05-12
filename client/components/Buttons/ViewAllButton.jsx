import React from 'react'
import { Link } from 'react-router-dom'

function ViewAllButton () {
  return (
    <Link to='/houses'>
      <button
        className="md:py-3 md:text-base md:w-24 py-2 self-center bg-poroporo hover:bg-poroporo text-white w-16 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
        VIEW ALL
      </button>
    </Link>
  )
}

export default ViewAllButton
