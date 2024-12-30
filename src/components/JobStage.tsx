import React from 'react';
import { Job } from '../types/job';

const JobStage = ({
  text,
  number,
  url,
  setJobUrl,
  jobs,
  setJobs,
}: {
  text: string;
  number: number;
  url: string;
  setJobUrl: React.Dispatch<React.SetStateAction<string>>;
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}) => {
  const clickAndChangeJob = () => {
    setJobUrl(url);
    setJobs(jobs);
  };

  return (
    <div
      onClick={clickAndChangeJob}
      className="flex flex-col items-center justify-center bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg shadow-md cursor-pointer transition-colors"
    >
      <span className="text-2xl font-bold">{number}</span>
      <p className="text-sm text-gray-300">{text}</p>
    </div>
  );
};

export default JobStage;
