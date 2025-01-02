import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

interface JobTypeInterface {
  name: string;
  location: string;
  desiredPay: number;
  description: string
}

const HomeSearch = ({ jwtToken }: { jwtToken: string }) => {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")

  const router = useRouter()

  const jobTypeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!jwtToken) {
      router.push('/login')
      return
    }

    const jobTypeObject: JobTypeInterface = {
      name,
      location,
      desiredPay: 0,
      description
    }
    const response = await fetch(`https://${process.env.NEXT_PUBLIC_CLIENT_API_URL}:3000/api/job-type`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`, // token as a Bearer Token
      },
      body: JSON.stringify(jobTypeObject)
    })
    if (response.status === 201) {
      toast('Your Job Search has been added. Please return tomorrow')
      setName("")
      setLocation("")
      setDescription("")
    }
  }


  return (
    <div className="py-20 bg-gray-900">
      <ToastContainer />
      <form onSubmit={(e) => jobTypeSubmit(e)} className="max-w-screen-md mx-auto flex flex-col items-center justify-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <input
            required
            type="text"
            placeholder="Job Title"
            className="placeholder:text-center w-full sm:w-auto p-3 text-gray-900 bg-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Town, city"
            className="placeholder:text-center w-full sm:w-auto p-3 text-gray-900 bg-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

        </div>
        <textarea placeholder="Description of suitable job"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full placeholder:text-center max-w-screen-sm p-3 mx-4 sm:mx-auto text-gray-900 bg-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <input
          type="submit"
          value="Submit Job Search"
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg cursor-pointer hover:bg-blue-700 transition"
        />
      </form>
    </div>
  );
};

export default HomeSearch;
