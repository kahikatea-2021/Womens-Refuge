import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ManageHouseButton () {
  const ourUser = useSelector(state => state.user)

  return (
    <>
      <div className="items-center">
        {ourUser?.house_id &&
            <Link to={`/house/manage/${ourUser.house_id}`}>
              <button className="py-2 self-center bg-poroporo hover:bg-poroporo text-white w-20 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">My Whare</button>
            </Link>
        }
      </div>
    </>
  )
}