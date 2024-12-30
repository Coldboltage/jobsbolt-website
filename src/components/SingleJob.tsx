import React from 'react';
import { Job } from '../types/job';
import Link from 'next/link';
import { interestStateClick } from '../utils/interestStateClick';

const SingleJob = ({
  job,
  setRefresh,
  jwt,
  setJob,
  setInterestedState,
}: {
  job: Job;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  jwt: string;
  setJob: React.Dispatch<React.SetStateAction<Job | undefined>>;
  setInterestedState: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}) => {
  return (
    <div className="border border-gray-700 rounded-lg bg-gray-800 p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="grid grid-cols-2 gap-6">
        {/* Job Details */}
        <Link href={`job/${job.id}`} className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-blue-400 hover:underline">{job.name}</h3>
          <p className="text-sm text-gray-400">{job.companyName}</p>
          <p className="text-sm text-gray-400">{job.location}</p>
        </Link>

        {/* Action Buttons */}
        <div className="flex flex-row justify-end items-center gap-4">
          {!job.interested ? (
            <>
              <button
                onClick={async () => {
                  await interestStateClick(job.id, false, jwt, setRefresh);
                  setJob(job);
                  setInterestedState(false);
                }}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Not Interested
              </button>
              <button
                onClick={async () => {
                  await interestStateClick(job.id, true, jwt, setRefresh);
                  setJob(job);
                  setInterestedState(true);
                }}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Interested
              </button>
            </>
          ) : job.interested && job.coverLetter === null ? (
            <Link
              href={`job/${job.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              UserPitch
            </Link>
          ) : (
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Apply
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
