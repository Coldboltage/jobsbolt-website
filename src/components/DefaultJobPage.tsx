import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { interestStateClick } from '../utils/interestStateClick';
import { Job } from '../types/job';
import { useRouter } from 'next/router';
import { FaClipboardCheck, FaFileAlt } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';
import { IoIosInformationCircle } from 'react-icons/io';

const DefaultJobPage = ({ initialJob, jwt }: { initialJob: Job; jwt: string }) => {
  const router = useRouter();

  const [job, setJob] = useState(initialJob as Job);
  const [refresh, setRefresh] = useState(false);
  const [userPitch, setUserPitch] = useState('');
  const [coverLetterGenerated] = useState(initialJob?.coverLetter?.generatedCoverLetter)

  useEffect(() => {
    if (!refresh) return;

    const fetchJob = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/job/${job.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`, // JWT as a Bearer Token
        },
      });
      const data = await res.json();
      setJob(data);
      setRefresh(false);
    };

    fetchJob();
  }, [job.id, jwt, refresh]);

  const sendUserPitch = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/cover-letter/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`, // JWT as a Bearer Token
      },
      body: JSON.stringify({ jobId: job.id, userPitch: userPitch }),
    });
    setRefresh(true);
  };

  const regeneateCoverLetter = async (cvId: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/cover-letter/reset/bulk-cvs/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`, // JWT as a Bearer Token
      },
      body: JSON.stringify({
        'cvIds': [cvId]
      }),
    });
    setRefresh(true);
  };

  const applyToJob = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/job/application-state/${job.indeedId}/${true}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`, // JWT as a Bearer Token
      },
    });
    setRefresh(true);
  };
  console.log(coverLetterGenerated)


  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white">{job.name}</h1>
          <p className="text-gray-400 mt-2">{job.companyName}</p>
        </header>

        {/* AI Suitability Description */}
        <section className="flex items-start mb-8">
          <div className="flex-shrink-0">
            <SiOpenai className="text-blue-400 text-2xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-white">AI Suitability Description</h3>
            <p className="prose-base whitespace-normal leading-relaxed mt-2 text-gray-400">{job.summary}</p>
          </div>
        </section>

        {/* Other Information */}
        <section className="flex items-start mb-8">
          <div className="flex-shrink-0">
            <IoIosInformationCircle className="text-green-400 text-2xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-white">Other Information</h3>
            <ul className="mt-4 space-y-2 text-gray-400 leading-relaxed">
              <li>
                <strong className="text-white">Job Suitability Score:</strong> {job.suitabilityScore}/100
              </li>
              <li>
                <strong className="text-white">Job Suited:</strong> {job.suited ? 'True' : 'False'}
              </li>
              <li>
                <strong className="text-white">Pay:</strong> {job.pay}
              </li>
              <li>
                <strong className="text-white">Indeed Link:</strong>{' '}
                <Link href={job.link} className="text-blue-400 hover:underline">
                  {job.link}
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Concise Job Analysis */}
        <section className="flex items-start mb-8">
          <div className="flex-shrink-0">
            <FaClipboardCheck className="text-yellow-400 text-2xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-white">Concise Job Analysis</h3>
            <ReactMarkdown className="prose-base whitespace-normal leading-relaxed mt-2 text-gray-400">
              {job.conciseDescription}
            </ReactMarkdown>
          </div>
        </section>

        {/* Job Actions */}
        <section className="flex flex-col mb-8">
          <div className="flex gap-4 mb-4">
            {!job.interested ? (
              <>
                <button
                  onClick={async () => {
                    await interestStateClick(job.id, false, jwt);
                    router.push({
                      pathname: '/jobs',
                      query: { refresh: 'true' },
                    });
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition"
                >
                  Not Interested
                </button>
                <button
                  onClick={async () => await interestStateClick(job.id, true, jwt, setRefresh)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition"
                >
                  Interested
                </button>
              </>
            ) : job.coverLetter === null ? (
              <div className="flex flex-col gap-4">
                <textarea
                  value={userPitch}
                  onChange={(e) => setUserPitch(e.target.value)}
                  className="h-40 p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-300 resize-none placeholder-gray-500"
                  placeholder="Write your message here..."
                />
                <button
                  onClick={sendUserPitch}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition"
                >
                  Submit
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-blue-400">Generated Cover Letter</h3>
                <p className="prose-base whitespace-pre-wrap leading-relaxed text-gray-400">{job.coverLetter?.generatedCoverLetter}</p>
                <div className="flex flex-row gap-4">
                  <button
                    disabled={job.applied}
                    onClick={applyToJob}
                    className={`py-2 px-6 rounded-lg font-semibold text-white ${job.applied ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                      } transition`}
                  >
                    {job.applied ? 'Applied' : 'Apply'}
                  </button>

                  {coverLetterGenerated && <button
                    disabled={job.applied}
                    onClick={() => job.coverLetter?.id && regeneateCoverLetter(job.coverLetter.id)}
                    className={`py-2 px-6 rounded-lg font-semibold text-white ${job.applied ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
                      } transition`}
                  >
                    Recreate Cover Letter
                  </button>}
                </div>

              </div>
            )}
          </div>
        </section>

        {/* Job Description */}
        <section className="flex items-start">
          <div className="flex-shrink-0">
            <FaFileAlt className="text-indigo-400 text-2xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-white">Job Description</h3>
            <ReactMarkdown className="prose-base whitespace-normal leading-relaxed mt-2 text-gray-400">
              {job.description}
            </ReactMarkdown>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DefaultJobPage;
