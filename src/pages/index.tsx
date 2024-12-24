import React, { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import HomeSearch from '../components/HomeSearch'
import HomeInformation from '../components/HomeInformation'

const IndexPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [jwtToken, setJwtToken] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('jwtToken') || ""
    setJwtToken(token)
  }, [])

  return (
    <MainLayout>
      <HomeSearch />
      <HomeInformation />
    </MainLayout>
  )
}

export default IndexPage
