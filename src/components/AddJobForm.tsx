import React, { useState } from 'react'
import AddJobInput from './AddJobInput'


const AddJobForm = () => {
  const [companyName, setCompanyName] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [jobId, setJobId] = useState("")
  const [jobTypeId, setJobTypeId] = useState("")
  const [salary, setSalary] = useState("")
  const [location, setLocation] = useState("")
  const [link, setLink] = useState("")
  const [jobDescription, setJobDescription] = useState("")

  const addNewJobSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const jwtToken = localStorage.getItem('jwtToken')
    const response = await fetch(`http://${process.env.API_URL}:3000/job/add-job-manually`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`, // JWT as a Bearer Token
      },
      body: JSON.stringify({
        indeedId: jobId,
        jobTypeId: jobTypeId,
        name: jobTitle,
        description: jobDescription,
        pay: salary,
        location: location,
        companyName: companyName,
        manual: true,
        link: link,
      })
    })
    if (response.statusText !== "OK") {
      console.log(response.statusText)
    } else {
      console.log("Success?")
    }
  }

  return (
    <div className="py-10 w-full">
      <form onSubmit={(e) => addNewJobSubmit(e)} className="flex flex-col gap-5 w-full">
        <AddJobInput inputName="Company Name" state={companyName} setState={setCompanyName} />
        <AddJobInput inputName="Job Title" state={jobTitle} setState={setJobTitle} />
        <AddJobInput inputName="Job Id" state={jobId} setState={setJobId} />
        <AddJobInput inputName="JobTypeId" state={jobTypeId} setState={setJobTypeId} />
        <AddJobInput inputName="Salary" state={salary} setState={setSalary} />
        <AddJobInput inputName="Location" state={location} setState={setLocation} />
        <AddJobInput inputName="Job Page Link" state={link} setState={setLink} />
        <div className="w-full">
          <h2>Job Description</h2>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full mx-auto h-60 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-black"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <input type="submit" value="Add Job" className="bg-slate-600 p-2 px-4" />




      </form>
    </div>
  )
}

export default AddJobForm