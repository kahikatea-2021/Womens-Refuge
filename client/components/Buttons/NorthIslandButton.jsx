import React from 'react'
import { Link } from 'react-router-dom'

export default function App () {
  return (
    <>
      <div>
        <Link to='/northisland'>
          <button>View all Safe houses in the North Island</button>
        </Link>
      </div>
    </>
  )
}
