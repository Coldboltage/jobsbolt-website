import React, { useEffect, useState } from 'react'
import SingleJob from './SingleJob'
import { Job } from '../types/job'
import JobStage from './JobStage'


const JobsList = ({ jwt, pendingInterestJobs, interestedJobs, coverReadyJobs }: { jwt: string, pendingInterestJobs: Job[], interestedJobs: Job[], coverReadyJobs: Job[] }) => {
  const [jobs, setJobs] = useState(pendingInterestJobs as Job[])
  const [updatedPendingInterestJobs] = useState(pendingInterestJobs as Job[])
  const [updatedInterestedJobs] = useState(interestedJobs as Job[])
  const [updatedCoverReadyJobs] = useState(Array.isArray(coverReadyJobs) ? coverReadyJobs as Job[] : [])

  const [refresh, setRefresh] = useState(false)
  const [jobUrl, setJobUrl] = useState(`http://${process.env.API_URL}:3000/job/pending-interested`)

  useEffect(() => {
    if (!refresh) return
    const fetchJobs = async () => {
      const res = await fetch(jobUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`, // JWT as a Bearer Token
        }
      })
      const data = await res.json()
      setJobs(data)
      setRefresh(false)
    }
    fetchJobs()
  }, [jobUrl, jwt, refresh])

  return (
    <div className="min-h-screen bg-gray-700 py-10">
      <div className="max-w-screen-lg mx-auto">
        <div className="">
          <h1 className="text-4xl pb-10">Jobs Found: {jobs.length}</h1>
          <div className="flex gap-6 mb-4">
            <JobStage number={updatedPendingInterestJobs.length} text='Pending Interest' url={`http://${process.env.API_URL}:3000/job/pending-interested`} setJobUrl={setJobUrl} jobs={updatedPendingInterestJobs} setJobs={setJobs} />
            <JobStage number={updatedInterestedJobs.length} text='Interested' url={`http://${process.env.API_URL}:3000/job/pending-interested`} setJobUrl={setJobUrl} jobs={updatedInterestedJobs} setJobs={setJobs} />
            <JobStage number={updatedCoverReadyJobs.length} text='Awaiting Apply' url={`http://${process.env.API_URL}:3000/job/pending-interested`} setJobUrl={setJobUrl} jobs={updatedCoverReadyJobs} setJobs={setJobs} />

          </div>
        </div>
        {jobs.map((job: Job, index: number) => {
          return <SingleJob job={job} setRefresh={setRefresh} key={index} />
        })}
      </div>
    </div>

  )
}




export default JobsList