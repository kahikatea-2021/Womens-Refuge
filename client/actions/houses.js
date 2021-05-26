export const SET_HOUSES = 'SET_HOUSES'
export const CLEAR_HOUSES = 'CLEAR_HOUSES'

export function setHouses (houses) {
  return {
    type: SET_HOUSES,
    houses
  }
}

export function clearHouses () {
  return {
    type: CLEAR_HOUSES
  }
}
