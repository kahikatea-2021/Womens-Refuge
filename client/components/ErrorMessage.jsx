import React from 'react'
import { useSelector } from 'react-redux'
const ErrorMessage = () => {
  const errorMsg = useSelector(state => state.error)
  if (!errorMsg) {
    return <></>
  }

  return (
    <p className="text-red-600">{errorMsg}</p>
  )
}

export default ErrorMessage
