export const SET_ERROR = 'SET_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export function setErrorMsg (errorMsg) {
  return {
    type: SET_ERROR,
    errorMsg
  }
}

export function clearError () {
  return {
    type: CLEAR_ERROR
  }
}
