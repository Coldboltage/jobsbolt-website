import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import Login from '../components/Login'
import AddJob from '../components/AddJob'
import cookie from 'cookie';



const AddJobPage = ({ token: initialToken }: { token: string }) => {
  const [token] = useState(initialToken || "")


  return (
    <MainLayout>
      {token.length === 0 ? (
        <Login />
      ) : (
        <AddJob />
      )}
    </MainLayout>
  )
}

export default AddJobPage

import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;

  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.jwt || null;


  return {
    props: {
      token
    }
  }
}