import React from 'react'
import DefaultPageLayout from '../layout/DefaultPageLayout'
import AddJobForm from './AddJobForm'

const AddJob = () => {
  return (
    <DefaultPageLayout pageName={'Add Job'}>
      <AddJobForm />
    </DefaultPageLayout>
  )
}

export default AddJob