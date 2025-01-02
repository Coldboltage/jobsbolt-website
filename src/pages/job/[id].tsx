import React from 'react'
import { Job } from '../../types/job'
import MainLayout from '../../layout/MainLayout'
import DefaultJobPage from '../../components/DefaultJobPage'
import * as cookie from 'cookie';

const JobPage = ({ job, jwt }: { job: Job, jwt: string }) => {
  console.log(job.companyName)

  return (
    <MainLayout>
      <DefaultJobPage initialJob={job} jwt={jwt} />
    </MainLayout>
  )
}

export default JobPage

import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface ContextParams extends ParsedUrlQuery {
  id: string
}

interface JobPageProps {
  job: Job
}

export const getServerSideProps: GetServerSideProps<JobPageProps, ContextParams> = async (context) => {
  const { req } = context;

  const cookies = cookie.parse(req.headers.cookie || '');
  const jwt = cookies.jwt || null;

  if (!context.params) {
    return {
      notFound: true,
    }
  }

  const res = await fetch(`http://${process.env.NEXT_PUBLIC_SERVER_API_URL}:3000/api/job/${context.params.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`, // JWT as a Bearer Jwt
    }
  })
  const data: Job = await res.json()
  return {
    props: { job: data, jwt }
  }
}