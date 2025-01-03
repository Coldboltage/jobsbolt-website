import React from 'react'
import DefaultPageLayout from '../layout/DefaultPageLayout'
import AddJobForm from './AddJobForm'

const AddJob = ({ token }: { token: string }) => {
  return (
    <DefaultPageLayout pageName={'Add Job'}>
      <AddJobForm token={token} />
    </DefaultPageLayout>
  )
}

export default AddJob