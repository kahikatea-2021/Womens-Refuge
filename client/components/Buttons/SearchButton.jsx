import React from 'react'
import { Link } from 'react-router-dom'

function SearchButton () {
  return (
    <Link to='/search'>
      <button
        className="md:py-3 md:text-base md:w-40 py-2 self-center bg-poroporo hover:bg-poroporo text-white text-xs w-24 rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
        REFINE SEARCH
      </button>
    </Link>
  )
}

export default SearchButton
