import React, { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';
import * as cookie from 'cookie';
import { GetServerSideProps } from 'next';
import { AiOutlineFileText, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai';

const AccountPage = ({ token }: { token: string }) => {
  const [cv, setCv] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [userTalk, setUserTalk] = useState<string>('');

  useEffect(() => {
    const fetchAccountInfo = async () => {
      const response = await fetch(`https://${process.env.NEXT_PUBLIC_CLIENT_API_URL}:3000/api/user/find-user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Token as a Bearer Token
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCv(data.cv);
        setDescription(data.description);
        setUserTalk(data.userTalk);
      }
    };

    fetchAccountInfo();
  }, [setCv, token]);

  return (
    <MainLayout>
      <div className="bg-gray-900">
        <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-8">
            {/* Page Header */}
            <h1 className="text-4xl font-bold text-white mb-8">Your Account</h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              This is all the information about your account that you will need to supply to Jobsbolt before it works effectively.
            </p>

            {/* CV Section */}
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <AiOutlineFileText className="text-blue-400 text-3xl mr-3" />
                <h3 className="text-2xl font-bold text-white">CV</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Copy and paste your CV. This will be used to match you with the most suitable job listings.
              </p>
              <textarea
                value={cv}
                onChange={(e) => setCv(e.target.value)}
                className="w-full h-60 p-4 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none bg-gray-800 text-gray-200 placeholder-gray-500 leading-7"
                placeholder="Paste your CV here..."
              ></textarea>
            </section>

            {/* Description Section */}
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <AiOutlineUser className="text-green-400 text-3xl mr-3" />
                <h3 className="text-2xl font-bold text-white">Description</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Provide a brief description about yourself. Explain your professional goals and what kind of job you are looking for.
              </p>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-60 p-4 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none bg-gray-800 text-gray-200 placeholder-gray-500 leading-7"
                placeholder="Describe yourself professionally..."
              ></textarea>
            </section>

            {/* User Talk Section */}
            <section>
              <div className="flex items-center mb-4">
                <AiOutlineMessage className="text-yellow-400 text-3xl mr-3" />
                <h3 className="text-2xl font-bold text-white">User Talk</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Type as you would normally write or speak. The more you write, the better Jobsbolt can mimic your natural communication style.
              </p>
              <textarea
                value={userTalk}
                onChange={(e) => setUserTalk(e.target.value)}
                className="w-full h-60 p-4 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none bg-gray-800 text-gray-200 placeholder-gray-500 leading-7"
                placeholder="Write in your natural tone..."
              ></textarea>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AccountPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const req = context.req;

  if (!req.headers.cookie) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.jwt || null;

  return {
    props: {
      token,
    },
  };
};
