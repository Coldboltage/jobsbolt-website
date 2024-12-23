import React from 'react'
import { Job } from '../types/job'

const JobStage = ({ text, number, url, setJobUrl, jobs, setJobs }: { text: string, number: number, url: string, setJobUrl: React.Dispatch<React.SetStateAction<string>>, jobs: Job[], setJobs: React.Dispatch<React.SetStateAction<Job[]>> }) => {
  const clickAndChangeJob = () => {
    console.log("fired")
    setJobUrl(url)
    setJobs(jobs)
  }


  return (
    <div onClick={clickAndChangeJob} className="flex flex-col hover:cursor-pointer">
      <span>{number}</span>
      <p>{text}</p>
    </div>
  )
}

export default JobStage