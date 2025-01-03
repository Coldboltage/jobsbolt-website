import React, { useEffect, useState } from 'react';
import SingleJob from './SingleJob';
import { Job } from '../types/job';
import JobStage from './JobStage';
import { toast, ToastContainer } from 'react-toastify';

const JobsList = ({
  jwt,
  pendingInterestJobs,
  interestedJobs,
  coverReadyJobs,
}: {
  jwt: string;
  pendingInterestJobs: Job[];
  interestedJobs: Job[];
  coverReadyJobs: Job[];
}) => {
  const [job, setJob] = useState<Job | undefined>(undefined);
  const [interestedState, setInterestedState] = useState<boolean | undefined>();
  const [jobs, setJobs] = useState(pendingInterestJobs as Job[]);
  const [updatedPendingInterestJobs] = useState(pendingInterestJobs as Job[]);
  const [updatedInterestedJobs] = useState(interestedJobs as Job[]);
  const [updatedCoverReadyJobs] = useState(Array.isArray(coverReadyJobs) ? (coverReadyJobs as Job[]) : []);
  const [refresh, setRefresh] = useState(false);
  const [jobUrl, setJobUrl] = useState(`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/job/pending-interested`);

  useEffect(() => {
    if (!refresh) return;
    const fetchJobs = async () => {
      const res = await fetch(jobUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`, // JWT as a Bearer Token
        },
      });
      const data = await res.json();
      setJobs(data);
      setRefresh(false);
      if (interestedState === true) {
        toast.success(`Interested: ${job?.name}`);
      } else {
        toast.error(`Removed: ${job?.name}`);
      }
    };
    fetchJobs();
  }, [interestedState, job?.name, jobUrl, jwt, refresh]);

  return (
    <div className="min-h-screen bg-gray-900 py-10 text-white">
      <ToastContainer />
      <div className="max-w-screen-lg mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Jobs Found: {jobs.length}</h1>
          <p className="text-gray-400 mt-2">
            Browse through the available job listings and manage your interests.
          </p>
        </header>

        <div className="flex flex-wrap gap-6 mb-10 justify-center">
          <JobStage
            number={jobs.length}
            text="Pending Interest"
            url={`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/job/pending-interested`}
            setJobUrl={setJobUrl}
            jobs={updatedPendingInterestJobs}
            setJobs={setJobs}
          />
          <JobStage
            number={updatedInterestedJobs.length}
            text="Interested"
            url={`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/job/pending-interested`}
            setJobUrl={setJobUrl}
            jobs={updatedInterestedJobs}
            setJobs={setJobs}
          />
          <JobStage
            number={updatedCoverReadyJobs.length}
            text="Awaiting Apply"
            url={`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/job/pending-interested`}
            setJobUrl={setJobUrl}
            jobs={updatedCoverReadyJobs}
            setJobs={setJobs}
          />
        </div>

        <div className="space-y-6">
          {jobs.map((job: Job, index: number) => (
            <SingleJob
              job={job}
              setRefresh={setRefresh}
              key={index}
              jwt={jwt}
              setJob={setJob}
              setInterestedState={setInterestedState}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsList;
