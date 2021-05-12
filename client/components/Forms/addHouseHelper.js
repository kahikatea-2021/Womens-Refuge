import { setHouse } from '../../actions/house'
import { setWait } from '../../actions/waiting'
import { setRegions } from '../../actions/region'
import { dispatch } from '../../store'
import { addHouse } from '../../apis/houses'
import { getAllRegions } from '../../apis/regions'

export function addNewHouse (house) {
  dispatch(setWait())
  const tempHouse = { ...house }
  delete tempHouse.region
  return addHouse(tempHouse)
    .then(newHouse => {
      console.log(newHouse)
      house.id = newHouse.body.id
      dispatch(setHouse(house))
      dispatch(setWait(false))
      return newHouse.body.id
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
      dispatch(setRegions(regions))
      return regions
    })
    .catch(err => {
      dispatch(setWait(false))
      console.log(err)
    })
}
