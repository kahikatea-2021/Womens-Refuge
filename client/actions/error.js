export const SET_ERROR = 'SET_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export function setError (errorMsg) {
  return {
    type: SET_ERROR,
    error: errorMsg
  }
}

export function cleaerError () {
  return {
    type: CLEAR_ERROR
  }
}
