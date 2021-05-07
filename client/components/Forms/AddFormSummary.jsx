import React from 'react'
import FormDeleteButton from '../Buttons/FormDeleteButton'
import FormEditButton from '../Buttons/FormEditButton'
// import fetchHouse from somewhere

function AddFormSummary (houseID) {
  const houseData = fetchHouse(houseID) // this doesn't exist

  return (
    <>
      <h1>REVIEW</h1>
      <div>
        <>Region: {houseData.region_id}</>
        <FormDeleteButton />
        <FormEditButton />
      </div>
      <div>
        <>Name: {houseData.name}</>
        <FormDeleteButton />
        <FormEditButton />
      </div>
      <div>
        <>Primary Contact Number: {houseData.phone_1}</>
        <FormDeleteButton />
        <FormEditButton />
      </div>
      <div>
        <>Secondary Contact Number: {houseData.phone_2}</>
        <FormDeleteButton />
        <FormEditButton />
      </div>
      <div>
        <>Notes: {houseData.notes}</>
        <FormDeleteButton />
        <FormEditButton />
      </div>
    </>
  )
}

export default AddFormSummary
