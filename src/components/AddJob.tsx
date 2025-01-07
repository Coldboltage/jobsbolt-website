import React from 'react'
import DefaultPageLayout from '../layout/DefaultPageLayout'
import AddJobForm from './AddJobForm'
import { JobType } from '../types/jobsType'

const AddJob = ({ token, jobTypes }: { token: string, jobTypes: JobType[] }) => {
  return (
    <DefaultPageLayout pageName={'Add Job'}>
      <AddJobForm token={token} initialJobTypes={jobTypes} />
    </DefaultPageLayout>
  )
}

export default AddJob