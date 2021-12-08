import React, { useEffect, useState } from 'react'
import { getHouse } from '../apis/regions'
import { deleteHouse } from '../apis/houses'
import { Link, useParams } from 'react-router-dom'
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
  const [deleted, setDeleted] = useState(false)
  let count = 0

  useEffect(() => {
    if (ourUser && !house) {
      getHouse(houseName.name)
        .then(results => {
          setHouse(results.sort((a, b) => a.room_id - b.room_id))
          return null
        })
        .catch(err => console.log(err))
    }
  })
  // eslint-disable-next-line no-lone-blocks
  {
    house &&
      house.forEach(element => {
        if (element.available) {
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

  // function clickCallback () {
  //   setConfirmDelete(true)
  // }
  function handleCancel () {
    setConfirmDelete(false)
  }

  function handleDelete () {
    deleteHouse(house[0].house_id)
      .then(() => {
        setDeleted(true)
        return null
      })
      .catch(err => console.log(err))
  }

  function isAdminOrHouseCor () {
    if (ourUser && house[0]) {
      if (ourUser.isAdmin || (ourUser.house_id === house[0].house_id)) return true
    }
    return false
  }

  function isAdmin () {
    return !!((ourUser && ourUser.isAdmin))
  }

  return (
    <>
      {(house && house[0]) &&
        <div className="">
          <div className="flex flex-col">
            <p className='text-center text-base md:text-xl'><b>{house[0].region}</b></p>
            <div className="flex items-center justify-center flex-col md:flex-row">
              {/* invisible button to match the visible one to center the name */}
              {isAdminOrHouseCor() && <div className="invisible hidden md:block mx-2"><ManageHouseButton text='EDIT' path={house[0].house_id} /></div>}
              <p className="text-center text-3xl md:text-5xl font-bold">{house[0].name}</p>
              {isAdminOrHouseCor() && <div className="mx-2"><ManageHouseButton text='EDIT' path={house[0].house_id} /></div>}
            </div>
            <div className='flex justify-center m-4'>{count > 0 && <div className="flex flex-row">available<img className='ml-2 w-6' src='/images/tickGreen.png' /></div>}</div>
            <div className='flex justify-center m-4'>{count === 0 && <div className="flex flex-row">unavailable<img className='ml-2 w-6' src='/images/crossRed.png' /></div>}</div>
            <div className="m-2 my-4 flex flex-col md:flex-row justify-center items-center">
              <div className="flex flex-row my-2 mx-8 text-center md:text-xl"><img className='w-6' src='/images/phone.png' /><b className='mx-2'>Primary:</b><a href={`tel:${house[0].phone_1}`}>{house[0].phone_1}</a></div>
              <div className="flex flex-row my-2 mx-8 text-center md:text-xl"><img className='w-6' src='/images/phone.png' /><b className='mx-2'>Secondary:</b><a href={`tel:${house[0].phone_2}`}>{house[0].phone_2}</a></div>
            </div>
            {house[0]?.notes && <div className='text-center md:text-xl mt-4'><b>Additional Information:</b><br />{house[0].notes}</div>}

            <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8 my-8'>
              {(house[0].room_id || house.length > 1) && house.map((h, i) => {
                return (
                  <div className='border-4 border-purple-300 shadow-lg md:h-56 w-2/3 md:w-1/5 rounded-lg p-3 mb-2 my-4 py-auto' key={i}>
                    <div><b>Room {i + 1}</b>
                      <div>
                        {h.available ? <i className='text-grass'>Available</i> : <b className='text-red-500'>Currently Unavailable</b>}
                      </div>
                      <br />
                      <img className='w-12 md:w-16' src='../../images/bed.png' />
                      {h.description}
                      <br />
                      <p>{`Single Beds: ${h.singleBeds}`}</p>
                      <p>{`Single Beds: ${h.doubleBeds}`}</p>
                      <p>{`Single Beds: ${h.queenBeds}`}</p>
                      <p>{`Single Beds: ${h.kingBeds}`}</p>
                      <p>{`Single Beds: ${h.bunkBeds}`}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            {isAdmin() && <div className="flex flex-col justify-center items-center">
              {!confirmDelete ? <DeleteHouseButton text={confirmDelete ? 'Confirm' : null} callback={setConfirmDelete} /> : <p>Confirm Delete</p>}
              {(confirmDelete && !deleted) && <div className="flex mt-2">
                <DeleteHouseButton text="YES" callback={handleDelete} />
                <DeleteHouseButton text="CANCEL" callback={handleCancel} />
              </div>}
            </div>}
            {deleted && <div className="flex flex-col justify-center items-center">
              <Link to="/"><p className="text-red-600 text-2xl">House Deleted!</p></Link>
              <Link to="/"><p>Return to Homepage</p></Link>
            </div>
            }
          </div>
        </div>
      }
    </>
  )
}

export default House
