import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { interestStateClick } from '../utils/interestStateClick'
import { Job } from '../types/job'
import { useRouter } from 'next/router'

const DefaultJobPage = ({ initialJob, jwt }: { initialJob: Job, jwt: string }) => {
  const router = useRouter()

  const [job, setJob] = useState(initialJob as Job)
  const [refresh, setRefresh] = useState(false)
  const [userPitch, setUserPitch] = useState('')


  useEffect(() => {
    if (!refresh) return
    const fetchJob = async () => {

      const res = await fetch(`http://${process.env.NEXT_PUBLIC_CLIENT_API_URL}:3000/api/job/${job.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`, // JWT as a Bearer Token
        }
      })
      const data = await res.json()
      setJob(data)
      setRefresh(false)
    }
    fetchJob()
  }, [job.id, jwt, refresh])

  const sendUserPitch = async () => {
    await fetch(`http://${process.env.NEXT_PUBLIC_CLIENT_API_URL}:3000/api/cover-letter/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`, // JWT as a Bearer Token
      },
      body: JSON.stringify({ jobId: job.id, userPitch: userPitch })
    })
    console.log("Should be good")
    setRefresh(true)
  }

  const applyToJob = async () => {

    await fetch(`http://${process.env.NEXT_PUBLIC_CLIENT_API_URL}:3000/api/job/application-state/${job.indeedId}/${true}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`, // JWT as a Bearer Token
      },
    })
    console.log("Applied")
    setRefresh(true)
  }




  return (
    <div className="py-10 bg-gray-700">
      <div className="max-w-screen-lg mx-auto ">
        <div className="pb-10">
          <h1 className="text-4xl">{job.name}</h1>
          <p>{job.companyName}</p>
        </div>

        <div className="max-w-screen-md text-white ">
          <h3 className="text-2xl font-bold text-white pb-3">AI Suitability Description</h3>
          <p className="pb-5 leading-[1.8]">{job.summary}</p>
          <h3 className="text-2xl font-bold text-white pb-3">Other Information</h3>

          <ul>
            <li className="pb-1">Job Suitability Score: <span className="font-bold">{job.suitabilityScore}/100</span></li>
            <li className="pb-1">Job Suited: <span className="font-bold">{job.suited ? "True" : "False"}</span></li>
            <li className="pb-1">Job Suitability Score: <span className="font-bold">{job.pay}</span></li>
            <li className="pb-4">Indeed Link: <Link className="text-white font-bold" href={job.link}>{job.link}</Link></li>
          </ul>

          <div>
            <h3 className="text-2xl font-bold text-white py-5">Concise Job Analysis</h3>
            <ReactMarkdown className="text-white pb-5 leading-8">
              {job.conciseDescription}
            </ReactMarkdown>
          </div>


          <div className="flex flex-row pb-5">
            {!job.interested ? (
              <>
                <button onClick={() => {
                  interestStateClick(job.id, false, jwt)
                  router.push({
                    pathname: '/jobs',
                    query: {
                      refresh: 'true'
                    }
                  })
                }} className="bg-red-400 text-white p-4 py-1 rounded w-auto inline-block text-[20px] font-bold mr-5">
                  Not Interested
                </button>
                <button onClick={() => interestStateClick(job.id, true, jwt, setRefresh)} className="bg-green-400 text-white p-4 py-1 rounded w-auto inline-block text-[20px] font-bold">
                  Interested
                </button>
              </>) : job.interested === true && job.coverLetter === null ? (

                <div className="w-full flex flex-col space-y-4">
                  <textarea
                    value={userPitch}
                    onChange={(e) => setUserPitch(e.target.value)}
                    className="h-60 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-black"
                    placeholder="Write your message here..."
                  ></textarea>
                  <button onClick={() => sendUserPitch()} className="bg-blue-400 text-white p-4 py-1 rounded text-[20px] font-bold">
                    Submit
                  </button>
                </div>


              )
              : (
                <div className="w-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white py-5">Generated Cover Letter</h3>
                  <p className="pb-2 leading-[1.8] whitespace-pre-wrap">{job.coverLetter?.generatedCoverLetter}</p>
                  <button disabled={job.applied} onClick={() => applyToJob()} className={`bg-blue-400 text-white p-4 py-1 rounded w-auto inline-block text-[20px] font-bold ${job.applied && 'disabled:bg-gray-400 disabled:cursor-not-allowed'}`}>
                    {job.applied ? 'Applied' : 'Apply'}
                  </button>
                </div>


              )
            }
          </div>
          <>
            <h3 className="text-2xl font-bold text-white pb-3">Job Description</h3>
            {/* <p className="pb-5 leading-[1.8] whitespace-pre-wrap prose text-white">{job.description}</p> */}
            <ReactMarkdown className="text-white pb-5 prose whitespace-normal leading-relaxed">
              {job.description}
            </ReactMarkdown>
          </>

        </div>

      </div>
    </div>
  )
}

export default DefaultJobPage