import React, { useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import JobsList from '../components/JobsList'
import { Job } from '../types/job'
import * as cookie from 'cookie';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

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

  // Fire all fetch calls concurrently
  const [resPendingInterest, resInterestedJobs, resCoverReady] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_API_URL}/api/job/pending-interested-slim`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_API_URL}/api/job/interested-jobs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_API_URL}/api/job/cover-letter-to-apply`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }),
  ]);

  // Parse JSON responses after all fetches complete
  const [dataPendingInterest, dataInterestedJobs, dataCoverReady] = await Promise.all([
    resPendingInterest.json(),
    resInterestedJobs.json(),
    resCoverReady.json(),
  ]);

  return {
    props: {
      token,
      pendingInterestJobs: dataPendingInterest,
      interestedJobs: dataInterestedJobs,
      coverReadyJobs: dataCoverReady,
    },
  };
}

export default JobsPage