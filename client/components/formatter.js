export default function formatHouses (houses) {
  const north = { island: 'north', regions: [] }
  const south = { island: 'south', regions: [] }
  houses.forEach(house => {
    if (house.island === 'north') {
      // const region = north.regions.find(ele => ele.name === house.region)
      // if (region) {
      //   region.houses.push(house)
      // } else {
      //   north.regions.push({ name: house.region, houses: [house] })
      // }
      sortInputs(north, house)
    } else {
      sortInputs(south, house)
    }
  })
  return [north, south]
}

function sortInputs (island, house) {
  const region = island.regions.find(ele => ele.name === house.region)
  if (region) {
    region.houses.push(house)
  } else {
    island.regions.push({ name: house.region, houses: [house] })
  }
}
