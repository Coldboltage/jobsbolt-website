import React, { useEffect, useState } from 'react';
import AddJobInput from './AddJobInput';
import AddJobSelect from './AddJobSelect';
import { JobType } from '../types/jobsType'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { ClockLoader } from 'react-spinners';

const AddJobForm = ({ token, initialJobTypes }: { token: string, initialJobTypes: JobType[] }) => {
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobId, setJobId] = useState('');
  const [jobTypeId, setJobTypeId] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [link, setLink] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [jobTypes, setJobTypes] = useState<string[]>([])


  const router = useRouter()
  useEffect(() => {
    const checkJobTypes = async () => {
      if (initialJobTypes.length === 0) {
        toast('Please create a jobtype')
        await new Promise(r => setTimeout(r, 3000))
        router.push('/')
      }
      const jobTypes = initialJobTypes.map((jobType: JobType) => `${jobType.name} ${jobType.location}`)
      setJobTypes(jobTypes)
    }
    checkJobTypes()
  }, [initialJobTypes, router]);

  const addNewJobSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/job/add-job-manually`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // JWT as a Bearer Token
        },
        body: JSON.stringify({
          indeedId: jobId,
          jobTypeId,
          name: jobTitle,
          description: jobDescription,
          pay: salary,
          location,
          companyName,
          manual: true,
          link,
        }),
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      setError(errorMessage || 'An error occurred. Please try again.');
    } else {
      console.log('Success');
      // Reset form fields if successful
      setCompanyName('');
      setJobTitle('');
      setJobId('');
      setJobTypeId('');
      setSalary('');
      setLocation('');
      setLink('');
      setJobDescription('');
    }
  };

  if (jobTypes?.length === 0) {
    return (
      <div className="py-10 w-full flex max-auto justify-center align-middle my-40">

        <ClockLoader

          color='blue'
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>

    )
  }

  return (
    <div className="py-10 w-full">
      <form onSubmit={addNewJobSubmit} className="flex flex-col gap-6 w-full mx-auto">

        {error && <p className="text-red-500 bg-red-100 p-3 rounded">{error}</p>}

        <AddJobInput inputName="Company Name" state={companyName} setState={setCompanyName} />
        <AddJobInput inputName="Job Title" state={jobTitle} setState={setJobTitle} />
        <AddJobInput inputName="Job Id" state={jobId} setState={setJobId} />
        <AddJobSelect inputName="Job Type Id" state={jobTypeId} setState={setJobTypeId} jobTypes={jobTypes} />
        <AddJobInput inputName="Salary" state={salary} setState={setSalary} />
        <AddJobInput inputName="Location" state={location} setState={setLocation} />
        <AddJobInput inputName="Job Page Link" state={link} setState={setLink} />

        <div className="w-full">
          <label htmlFor="jobDescription" className="block text-gray-300 font-medium mb-2">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full h-40 p-4 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none bg-gray-800 text-gray-200 placeholder-gray-500"
            placeholder="Describe the job details here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJobForm;
