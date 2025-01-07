import React from 'react';

const AddJobSelect = ({
  inputName,
  state,
  setState,
  jobTypes,
}: {
  inputName: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  jobTypes: string[]
}) => {
  return (
    <div className="w-full">
      <label htmlFor={inputName} className="block text-gray-300 font-medium mb-2">
        {inputName}
      </label>
      <select
        id={inputName}
        className="w-full p-3 text-gray-200 bg-gray-800 placeholder-gray-500 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={state}
        onChange={(e) => setState(e.target.value)}
        required
      >
        {jobTypes && jobTypes.map(jobType => (
          <option key={jobType} value={jobType}>{jobType}</option>
        ))}
      </select>
    </div>
  );
};

export default AddJobSelect;
