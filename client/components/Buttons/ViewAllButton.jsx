import React from 'react'
import { Link } from 'react-router-dom'

function ViewAllButton () {
  return (
    <div>
      <Link to='/houses'>
        <button>View all Safe houses in NZ</button>
      </Link>
    </div>
  )
}

export default ViewAllButton
