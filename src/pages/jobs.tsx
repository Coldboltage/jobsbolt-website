import React from 'react'
import MainLayout from '../layout/MainLayout'
import JobsList from '../components/JobsList'
import { Job } from '../types/job'
import cookie from 'cookie';


const JobsPage = ({ token, pendingInterestJobs, interestedJobs, coverReadyJobs }: { token: string, pendingInterestJobs: Job[], interestedJobs: Job[], coverReadyJobs: Job[] }) => {
  return (
    <MainLayout>
      <JobsList jwt={token} pendingInterestJobs={pendingInterestJobs} interestedJobs={interestedJobs} coverReadyJobs={coverReadyJobs} />

    </MainLayout>
  )
}

export const getServerSideProps = async (context) => {
  // const token = process.env.NEXT_PUBLIC_API_URL_JWT_TOKEN
  const { req } = context;

  // Parse cookies from the request
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.jwt;
  const resPendingInterest = await fetch('http://localhost:3000/job/pending-interested', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // token as a Bearer Token
    }
  })
  const dataPendingInterest = await resPendingInterest.json()

  const resInterestedJobs = await fetch('http://localhost:3000/job/interested-jobs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // token as a Bearer Token
    }
  })
  const dataInterestedJobs = await resInterestedJobs.json()

  const resCoverReady = await fetch('http://localhost:3000/job/cover-letter-to-apply', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // token as a Bearer Token
    }
  })
  const dataCoverReady = await resCoverReady.json()
  return {
    props: { token, pendingInterestJobs: dataPendingInterest, interestedJobs: dataInterestedJobs, coverReadyJobs: dataCoverReady }
  }
}

export default JobsPage