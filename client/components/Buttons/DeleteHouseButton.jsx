import React from 'react'
import { Link } from 'react-router-dom'

export default function DeleteHouseButton (props) {
  return (
    <>
      <div className="items-center mx-1">
        <button
          onClick={props.callback}
          className="md:py-3 md:text-base md:w-24 py-2 self-center bg-red-600 hover:bg-poroporo text-white w-20 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
          {props.text || 'DELETE'}
        </button>
      </div>
    </>
  )
}
