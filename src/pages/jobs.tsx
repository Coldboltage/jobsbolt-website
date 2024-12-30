import React, { useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import JobsList from '../components/JobsList'
import { Job } from '../types/job'
import * as cookie from 'cookie';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';

const JobsPage = ({ token, pendingInterestJobs, interestedJobs, coverReadyJobs }: { token: string, pendingInterestJobs: Job[], interestedJobs: Job[], coverReadyJobs: Job[] }) => {
  const router = useRouter()
  const showToast = router.query.showToast

  if (!token) {
    router.push('/login')
  }

  useEffect(() => {
    if (showToast) {
      toast("Login Successful")
      router.replace('/jobs', undefined, { shallow: true });
    }
  }, [router, showToast])

  return (
    <MainLayout>
      <ToastContainer />
      <JobsList jwt={token} pendingInterestJobs={pendingInterestJobs} interestedJobs={interestedJobs} coverReadyJobs={coverReadyJobs} />
    </MainLayout>
  )
}



export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;

  if (!req.headers.cookie) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }


  // Parse cookies from the request
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.jwt;

  console.log(process.env.NEXT_PUBLIC_SERVER_API_URL)

  const resPendingInterest = await fetch(`http://${process.env.NEXT_PUBLIC_SERVER_API_URL}:3000/api/job/pending-interested`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // token as a Bearer Token
    }
  })
  const dataPendingInterest = await resPendingInterest.json()

  const resInterestedJobs = await fetch(`http://${process.env.NEXT_PUBLIC_SERVER_API_URL}:3000/api/job/interested-jobs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // token as a Bearer Token
    }
  })
  const dataInterestedJobs = await resInterestedJobs.json()

  const resCoverReady = await fetch(`http://${process.env.NEXT_PUBLIC_SERVER_API_URL}:3000/api/job/cover-letter-to-apply`, {
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