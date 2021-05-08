import React, { useEffect, useState } from 'react'
import { getHouse } from '../apis/regions'
import { useParams } from 'react-router-dom'

function House () {
  const [house, setHouse] = useState(null)
  const houseName = useParams().name

  useEffect(() => {
    getHouse(houseName)
      .then(results => {
        setHouse(results)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {house &&
      <div>
        <p className="text-center text-3xl font-bold">{house[0].name}</p>
        {house[0].available === 1 && <p className="text-center">available</p>}
        {house[0].available === 0 && <p className="text-center">available</p>}
        <br />
        <b>{house[0].region}</b>
        <p>Primary Contact Number: <b>{house[0].phone_1}</b></p>
        <p>Secondary Contact Number: <b>{house[0].phone_2}</b></p>
        <br />
        <div>
          {house[0] && house.map((h, i) => {
            return <div className='border-2' key={i}>
              <div><b>Room {i + 1}</b>
                <div className='inline'>
                  <div>
                    {h.available ? <i>Available</i> : <b>Currently Unavailable</b>}
                  </div>
                  <br />
                  <img className='w-8' src='../../images/bed.png' />
                  {h.description}
                </div>
              </div>
            </div>
          })}
        </div>
        <br />
        {house[0]?.notes && <p>Additional Information: <br/> <b>{house[0].notes}</b></p>}
      </div>
      }
    </>
  )
}

export default House
