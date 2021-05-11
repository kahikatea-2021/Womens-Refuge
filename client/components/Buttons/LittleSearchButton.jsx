import React from 'react'
import { Link } from 'react-router-dom'

export default function LittleSearchButton () {
  return (
    <Link to='/search'>
      <button
        className=" md:hidden shadow-lg space-x-2 flex justify-center md:py-3 md:text-base w-8 py-2 self-center bg-poroporo hover:bg-poroporo text-white text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
        <img className='w-4 md:w-6' src='/images/searchIcon.png'/>
      </button>
    </Link>
  )
}
