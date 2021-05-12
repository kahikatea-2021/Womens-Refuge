import React from 'react'
import { useHistory } from 'react-router-dom'

function BackButton () {
  const history = useHistory()
  if (history.location.pathname === '/') return <></>
  return (
    <button
      className="shadow-2xl py-2 ml-8 mt-4 self-start bg-poroporo hover:bg-poroporo text-white w-16 text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out" onClick={() => history.goBack()}>
      BACK
    </button>
  )
}

export default BackButton
