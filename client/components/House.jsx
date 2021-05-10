import React, { useEffect, useState } from 'react'
import { getHouse } from '../apis/regions'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

function House () {
  const [house, setHouse] = useState(null)
  const houseName = useParams()
  const ourUser = useSelector(state => state.user)
  const { isLoading, isAuthenticated } = useAuth0()
  let count = 0

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
  // eslint-disable-next-line no-lone-blocks
  {
    house &&
      house.forEach(element => {
        if (element.available === 1) {
          count++
          console.log('count', count)
        }
      })
  }

  if (isLoading) {
    return <img src="/images/loading.gif"></img>
  }

  if (!isAuthenticated) {
    return <p>Unauthorised access</p>
  }
  console.log(house)

  return (
    <>
      {/* {house && ourUser?.house_id === house[0].id &&
        <Link to={`/house/manage/${ourUser.house_id}`}>MANAGE MY HOUSE</Link>

      } */}

      {house &&
        <div>
          <div>
            <p className='text-center text-base md:text-xl'><b >{house[0].region}</b></p>
            <p className="text-center text-3xl md:text-5xl font-bold my-1 md:my-2">{house[0].name}</p>
            <div className='flex justify-center'>{count > 0 && <div className="flex flex-row">available<img className='ml-2 w-6' src='/images/tickGreen.png' /></div>}</div>
            <div className='flex justify-center'>{count === 0 && <div className="flex flex-row">unavailable<img className='ml-2 w-6' src='/images/crossRed.png' /></div>}</div>

            <div className="m-2 my-4 flex flex-col md:flex-row justify-center items-center">
              <div className="flex flex-row my-2 mx-8 text-center md:text-xl"><img className='w-6' src='/images/phone.png' /><b className='mx-2'>Primary:</b>{house[0].phone_1}</div>
              <div className="flex flex-row my-2 mx-8 text-center md:text-xl"><img className='w-6' src='/images/phone.png' /><b className='mx-2'>Secondary:</b>{house[0].phone_2}</div>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8 my-8'>
              {(house[0].room_id || house.length > 1) && house.map((h, i) => {
                return (
                  <div className='border-4 border-purple-300 w-2/3 md:w-1/5 rounded-lg p-1 mb-2 my-4' key={i}>
                    <div><b>Room {i + 1}</b>

                      <div>
                        {h.available ? <i className='text-green-500'>Available</i> : <b className='text-red-500'>Currently Unavailable</b>}
                      </div>
                      <br />
                      <img className='w-8' src='../../images/bed.png' />
                      {h.description}

                    </div>
                  </div>
                )
              })}
            </div>
            {house[0]?.notes && <div className='text-base md:text-xl'><b>Additional Information:</b><br />{house[0].notes}</div>}
          </div>
        </div>
      }
    </>
  )
}

export default House
