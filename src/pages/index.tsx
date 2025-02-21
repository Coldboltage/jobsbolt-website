import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import HomeSearch from '../components/HomeSearch'
import HomeInformation from '../components/HomeInformation'
import { GetServerSideProps } from 'next'
import * as cookie from 'cookie';
import Hero from '../components/Hero'


const IndexPage = ({ token }: { token: string | null }) => {
  const [jwtToken] = useState(token)




  return (
    <MainLayout>
      <Hero />
      <HomeSearch jwtToken={jwtToken || ''} />
      <HomeInformation />
    </MainLayout>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const req = context.req

  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.jwt || null;


  return {
    props: {
      token
    }
  }
}
