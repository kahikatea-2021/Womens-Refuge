import React, { useEffect, useState } from 'react'
import { getHouse } from '../apis/regions'
import { useParams } from 'react-router-dom'

function House () {
  const [house, setHouse] = useState(null)
  const houseName = useParams().name

  useEffect(() => {
    getHouse(houseName)
      .then(results => {
        console.log('house', results)
        setHouse(results)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {house && <p>
        <p>You are viewing: <b>{house[0].name}</b> house, in <b>{house[0].region}</b></p>
        {house[0].available === 1 && <p>This house currently <b>has</b> availablity</p>}
        {house[0].available === 0 && <p>This house currently has <b>no</b> availablity</p>}
        <br />
        <table>
          <tr>
            <th>Rooms</th>
          </tr>
          <tr>
            <td>
              <ul>
                {house[0] && house.map((h, i) => {
                  return <li key={i}><span>Room {i + 1} is <span><b>available</b> {h.available ? '' : 'no'}</span></span> and has {h.description} </li>
                })}
              </ul>
            </td>
          </tr>
        </table>
        <br />
        <p>Primary Contact Number: <b>{house[0].phone_1}</b></p>
        <p>Secondary Contact Number: <b>{house[0].phone_2}</b></p>
        <br />
        {house[0]?.notes && <p>Additional Information: <b>{house[0].notes}</b></p>}
      </p>}
    </>
  )
}

export default House
