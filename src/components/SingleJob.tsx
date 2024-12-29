import React from 'react'
import { Job } from '../types/job'
import Link from 'next/link'
import { interestStateClick } from '../utils/interestStateClick'

const SingleJob = ({ job, setRefresh, jwt }: { job: Job, setRefresh: React.Dispatch<React.SetStateAction<boolean>>, jwt: string }) => {

  return (
    <div className="grid grid-cols-2 py-5 items-start border-t-[1px] border-t-slate-600">
      <Link href={`job/${job.id}`} className="flex flex-col gap-1 ">
        <h3 className="font-bolt text-2xl underline">{job.name}</h3>
        <p>{job.companyName}</p>
        <p>{job.location}</p>
      </Link>
      <div className="flex flex-row justify-end gap-4">
        {!job.interested ? (
          <>
            <button onClick={async () => await interestStateClick(job.id, false, jwt, setRefresh,)} className="bg-red-400 text-white p-4 py-1 rounded w-auto inline-block text-[20px] font-bold">
              Not Interested
            </button>
            <button onClick={async () => await interestStateClick(job.id, true, jwt, setRefresh,)} className="bg-green-400 text-white p-4 py-1 rounded w-auto inline-block text-[20px] font-bold">
              Interested
            </button>
          </>) : job.interested === true && job.coverLetter === null ? (
            <Link className="bg-blue-400 text-white p-4 py-1 rounded w-auto inline-block text-[20px] font-bold" href={`job/${job.id}`}>
              UserPitch
            </Link>)
          : (
            <button className="bg-blue-400 text-white p-4 py-1 rounded w-auto inline-block text-[20px] font-bold">
              Apply
            </button>)
        }

      </div>
    </div>


  )
}

export default SingleJob