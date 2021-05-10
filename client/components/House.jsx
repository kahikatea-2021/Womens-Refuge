import React, { useEffect, useState } from 'react'
import { getHouse } from '../apis/regions'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

function House () {
  const [house, setHouse] = useState(null)
  const houseName = useParams()
  const ourUser = useSelector(state => state.user)
  const { isLoading, isAuthenticated } = useAuth0()
  console.log(houseName.name)

  useEffect(() => {
    if (ourUser && !house) {
      getHouse(houseName.name)
        .then(results => {
          setHouse(results)
          return null
        })
        .catch(err => console.log(err))
    }
  })

  if (isLoading) {
    return <img src="/images/loading.gif"></img>
  }

  if (!isAuthenticated) {
    return <p>Unauthorised access</p>
  }
  console.log(house)

  return (
    <>
      {house && ourUser?.house_id === house[0].id &&
        <Link to={`/house/manage/${ourUser.house_id}`}>MANAGE MY HOUSE</Link>

      }

      {house &&
        <div>
          <div>
            <p className='text-center'><b >{house[0].region}</b></p>
            <p className="text-center text-3xl font-bold">{house[0].name}</p>
            {house[0].available === 1 && <p className="text-center">available</p>}
            {house[0].available === 0 && <p className="text-center">available</p>}

            <div className="m-2">
              <h5>Contacts:</h5>
              <p>Primary: <b>{house[0].phone_1}</b></p>
              <p>Secondary: <b>{house[0].phone_2}</b></p>
            </div>

            <div>
              {house[0] && house.map((h, i) => {
                return <div className='border-2 rounded-lg p-1 mb-2' key={i}>
                  <div><b>Room {i + 1}</b>
                    <div className=''>
                      <div>
                        {h.available ? <i className='text-green-500'>Available</i> : <b className='text-red-500'>Currently Unavailable</b>}
                      </div>
                      <br />
                      <img className='w-8' src='../../images/bed.png' />
                      {h.description}
                    </div>
                  </div>
                </div>
              })}
            </div>
            {house[0]?.notes && <p>Additional Information: <br /> <b>{house[0].notes}</b></p>}
          </div>
        </div>
      }
    </>
  )
}
export default House
