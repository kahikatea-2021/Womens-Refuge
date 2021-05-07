import React from 'react'
import { Link } from 'react-router-dom'

// PLEASE NOTE: the "to='/allsafehouses'" is just a placeholder until we know the route names

function ViewAllButton () {
  return (
    <Link className='button' to='/allsafehouses'>View All Safehouses</Link>
  )
}

export default ViewAllButton
