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

export const getServerSideProps = async (context) => {
  // const token = process.env.NEXT_PUBLIC_API_URL_JWT_TOKEN
  const { req } = context;

  // Parse cookies from the request
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.jwt || null; // Explicitly set to null if not present


  return {
    props: {
      token
    }
  }
}