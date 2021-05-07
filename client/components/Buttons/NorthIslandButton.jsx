import React from 'react'
import { Link } from 'react-router-dom'

export default function App () {
  return (
    <>
      <Link to='/northisland'>
        <button>View all Safe houses in the South Island</button>
      </Link>
    </>
  )
}
