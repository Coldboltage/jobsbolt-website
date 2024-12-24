import React from 'react'
import DefaultPageLayout from '../layout/DefaultPageLayout'
import AddJobForm from './AddJobForm'

const AddJob = () => {
  return (
    <DefaultPageLayout pageName={'Add Job'}>
      <p>To use this functionality, please go onto the page of interest where the job has been listed</p>
      <AddJobForm />
    </DefaultPageLayout>
  )
}

export default AddJob