import React from 'react'
import MainLayout from '../layout/MainLayout'
import JobsList from '../components/JobsList'
import { Job } from '../types/job'

const JobsPage = ({ pendingInterestJobs, interestedJobs, coverReadyJobs }: { pendingInterestJobs: Job[], interestedJobs: Job[], coverReadyJobs: Job[] }) => {
  return (
    <MainLayout>
      <JobsList pendingInterestJobs={pendingInterestJobs} interestedJobs={interestedJobs} coverReadyJobs={coverReadyJobs} />

    </MainLayout>
  )
}

export const getServerSideProps = async () => {
  const JWT = process.env.NEXT_PUBLIC_API_URL_JWT_TOKEN
  const resPendingInterest = await fetch('http://localhost:3000/job/pending-interested', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JWT}`, // JWT as a Bearer Token
    }
  })
  const dataPendingInterest = await resPendingInterest.json()

  const resInterestedJobs = await fetch('http://localhost:3000/job/interested-jobs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JWT}`, // JWT as a Bearer Token
    }
  })
  const dataInterestedJobs = await resInterestedJobs.json()

  const resCoverReady = await fetch('http://localhost:3000/job/cover-letter-to-apply', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JWT}`, // JWT as a Bearer Token
    }
  })
  const dataCoverReady = await resCoverReady.json()
  return {
    props: { pendingInterestJobs: dataPendingInterest, interestedJobs: dataInterestedJobs, coverReadyJobs: dataCoverReady }
  }
}

export default JobsPage