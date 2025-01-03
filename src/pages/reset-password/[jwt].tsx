import React from 'react'
import ResetPassword from '../../components/ResetPassword'
import { GetServerSideProps } from 'next'
import MainLayout from '../../layout/MainLayout'

const ResetPasswordPage = ({ jwt }: { jwt: string }) => {
  return (
    <MainLayout>
      <ResetPassword jwt={jwt} />

    </MainLayout>
  )
}

export default ResetPasswordPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context?.params?.jwt) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      jwt: context.params.jwt
    }
  }
} 