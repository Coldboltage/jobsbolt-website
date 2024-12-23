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

export const getServerSideProps = async (context) => {

  const JWT = process.env.NEXT_PUBLIC_API_URL_JWT_TOKEN
  const res = await fetch(`http://localhost:3000/job/${context.params.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JWT}`, // JWT as a Bearer Token
    }
  })
  const data = await res.json()
  return {
    props: { job: data }
  }
}