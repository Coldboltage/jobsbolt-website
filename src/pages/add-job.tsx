import * as cookie from 'cookie';
import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import AddJob from '../components/AddJob'
import { GetServerSideProps } from 'next';
import router from 'next/router';
import { JobType } from '../types/jobsType';



const AddJobPage = ({ token: initialToken, jobTypes }: { token: string, jobTypes: JobType[] }) => {
  const [token] = useState(initialToken || "")
  if (!token) {
    router.push('/login')
  }


  return (
    <MainLayout>
      <AddJob token={token} jobTypes={jobTypes} />
    </MainLayout>
  )
}

export default AddJobPage


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


  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.jwt || null;

  const respnse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API_URL}/api/job-type/find-by-user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // token as a Bearer Token
    }
  })
  const data: JobType[] = await respnse.json()


  return {
    props: {
      token, jobTypes: data
    }
  }
}