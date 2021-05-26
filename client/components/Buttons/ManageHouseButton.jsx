import React from 'react'
import { Link } from 'react-router-dom'

export default function ManageHouseButton (props) {
  return (
    <>
      <div className="items-center">
        <Link to={`/house/manage/${props.path}`}>
          <button
            className="md:py-3 md:text-base md:w-24 py-2 self-center bg-poroporo hover:bg-poroporo text-white w-20 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
            {props.text}
          </button>
        </Link>

      </div>
    </>
  )
}
