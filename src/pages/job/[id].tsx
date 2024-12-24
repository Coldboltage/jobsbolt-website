import React from 'react'
import { Job } from '../../types/job'
import MainLayout from '../../layout/MainLayout'
import DefaultJobPage from '../../components/DefaultJobPage'

const JobPage = ({ job }: { job: Job }) => {

  return (
    <MainLayout>
      <DefaultJobPage initialJob={job} />
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
  const JWT = process.env.NEXT_PUBLIC_API_URL_JWT_TOKEN
  if (!context.params) {
    return {
      notFound: true,
    }
  }

  const res = await fetch(`http://${process.env.API_URL}:3000/job/${context.params.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JWT}`, // JWT as a Bearer Token
    }
  })
  const data: Job = await res.json()
  return {
    props: { job: data }
  }
}