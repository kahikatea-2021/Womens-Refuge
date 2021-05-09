export const SET_WAITING = 'SET_WAITING'

export function setWait (waiting = true) {
  return {
    type: SET_WAITING,
    waiting
  }
}
