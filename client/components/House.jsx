import React, { useEffect, useState } from 'react'
import { getHouse } from '../apis/regions'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import ManageHouseButton from './Buttons/ManageHouseButton'
import DeleteHouseButton from './Buttons/DeleteHouseButton'

function House () {
  const [house, setHouse] = useState(null)
  const houseName = useParams()
  const ourUser = useSelector(state => state.user)
  const { isLoading, isAuthenticated } = useAuth0()
  const [confirmDelete, setConfirmDelete] = useState(false)
  let count = 0

  useEffect(() => {
    if (ourUser && !house) {
      getHouse(houseName.name)
        .then(results => {
          setHouse(results)
          console.log('check')
          console.log(results)
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
        }
      })
  }

  if (isLoading) {
    return <img src="/images/loading.gif"></img>
  }

  if (!isAuthenticated) {
    return <p>Unauthorised access</p>
  }

  function clickCallback () {
    setConfirmDelete(true)
  }

  return (
    <>
      {house &&
        <div className="">
          <div className="flex flex-col">
            <p className='text-center text-base md:text-xl'><b>{house[0].region}</b></p>
            <div className="flex items-center justify-center flex-col md:flex-row">
              {(ourUser && ourUser.isAdmin === 1) && <div className="invisible hidden md:block mx-2"><ManageHouseButton text='EDIT' path={house[0].house_id} /></div>}
              <p className="text-center text-3xl md:text-5xl font-bold">{house[0].name}</p>
              {(ourUser && ourUser.isAdmin === 1) && <div className="mx-2"><ManageHouseButton text='EDIT' path={house[0].house_id} /></div>}
            </div>
            <div className='flex justify-center'>{count > 0 && <div className="flex flex-row">available<img className='ml-2 w-6' src='/images/tickGreen.png' /></div>}</div>
            <div className='flex justify-center'>{count === 0 && <div className="flex flex-row">unavailable<img className='ml-2 w-6' src='/images/crossRed.png' /></div>}</div>
            <div className="m-2 my-4 flex flex-col md:flex-row justify-center items-center">
              <div className="flex flex-row my-2 mx-8 text-center md:text-xl"><img className='w-6' src='/images/phone.png' /><b className='mx-2'>Primary:</b>{house[0].phone_1}</div>
              <div className="flex flex-row my-2 mx-8 text-center md:text-xl"><img className='w-6' src='/images/phone.png' /><b className='mx-2'>Secondary:</b>{house[0].phone_2}</div>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8 my-8'>
              {(house[0].room_id || house.length > 1) && house.map((h, i) => {
                return (
                  <div className='border-4 border-purple-300 shadow-lg w-2/3 md:w-1/5 rounded-lg p-1 mb-2 my-4' key={i}>
                    <div><b>Room {i + 1}</b>
                      <div>
                        {h.available ? <i className='text-grass'>Available</i> : <b className='text-red-500'>Currently Unavailable</b>}
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
            <div className="flex flex-col justify-center items-center">
              {!confirmDelete ? <DeleteHouseButton text={confirmDelete ? 'Confirm' : null} callback={setConfirmDelete} /> : <p>Confirm Delete</p>}
              {confirmDelete && <div className="flex mt-2">
                <DeleteHouseButton text="YES" />
                <DeleteHouseButton text="CANCELL" />
              </div>}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default House
