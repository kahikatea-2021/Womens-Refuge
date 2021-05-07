import React from 'react'
import { Link } from 'react-router-dom'

export default function App () {
  return (
    <>
      <div>
        <Link to='/southisland'>
          <button>View all Safe houses in the South Island</button>
        </Link>
      </div>
    </>
  )
}
