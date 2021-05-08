import { setHouse } from '../../actions/house'
import { setWait } from '../../actions/waiting'
import { dispatch } from '../../store'
import { addHouse } from '../../apis/houses'
import { getAllRegions } from '../../apis/regions'

export function addNewHouse (house) {
  dispatch(setWait())
  return addHouse(house)
    .then(newHouse => {
      dispatch(setHouse(newHouse.body))
      dispatch(setWait(false))
      return null
    })
    .catch(err => {
      dispatch(setWait(false))
      console.log(err)
    })
}

export function getRegionNames (island) {
  dispatch(setWait())
  return getAllRegions(island)
    .then(regions => {
      dispatch(setWait(false))
      return regions
    })
    .catch(err => {
      dispatch(setWait(false))
      console.log(err)
    })
}
