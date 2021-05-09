import request from 'superagent'
import { getState } from '../store'
import { accessHeader } from './tokenHelper'
const rootUrl = '/api/v1/houses/'
const token = 'Bearer ' + getState().user?.token

export function getAllRegions (island) {
  console.log('region', token)
  return request.get('/api/v1/regions')
    .query({ island: island })
    .set(accessHeader)
    .then(res => {
      return res.body
    })
}

// Get all the houses
export function getAllHouses (house) {
  return request.get(rootUrl)
    .query({ house: house })
    .set(accessHeader)
    .then(res => {
      return res.body
    })
}

// Get all the houses in a particular region
export function getHousesInRegion (region) {
  return request.get(rootUrl)
    .query({ region: region })
    .set(accessHeader)
    // .accept(acceptJsonHeader)
    .then(res => {
      return res.body
    })
}

// Get a house
export function getHouse (house) {
  return request.get(rootUrl + 'name/' + house)
    .set(accessHeader)
    .then(res => {
      return res.body
    })
}

export function getHouseById (id) {
  return request.get(rootUrl + 'id/' + id)
    .set(accessHeader)
    .then(res => {
      console.log('house id rooms', res.body)
      return res.body
    })
}
