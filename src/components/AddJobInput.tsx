import React from 'react'

const AddJobInput = ({ inputName, state, setState }: { inputName: string, state: string, setState: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className="w-full">
      <h2 className="pb-3 w-full">{inputName}</h2>
      <input className=" w-2/3 p-3 px-4 text-gray-900 bg-gray-300 placeholder-slate-900 rounded-md" value={state} onChange={(e) => setState(e.target.value)} required type="text" placeholder={inputName} />
    </div>
  )
}

export default AddJobInput


