// import { getState } from '../store'

export default function getAccessHeader () {
  return { authorization: 'Bearer ' + localStorage.getItem('access-token') }
}

export const accessHeader = { authorization: 'Bearer ' + localStorage.getItem('access-token') }
