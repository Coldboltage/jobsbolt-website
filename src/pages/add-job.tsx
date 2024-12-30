import * as cookie from 'cookie';
import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import AddJob from '../components/AddJob'
import { GetServerSideProps } from 'next';
import router from 'next/router';



const AddJobPage = ({ token: initialToken }: { token: string }) => {
  const [token] = useState(initialToken || "")
  if (!token) {
    router.push('/login')
  }

  return (
    <MainLayout>
      <AddJob />
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


  return {
    props: {
      token
    }
  }
}