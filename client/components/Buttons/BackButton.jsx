import React from 'react'
import { useHistory } from 'react-router-dom'

function BackButton () {
  const history = useHistory()
  return (
    <button className="py-2 self-center bg-poroporo hover:bg-poroporo text-white w-16 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out" onClick={() => history.goBack()}>Back</button>
  )
}

export default BackButton
