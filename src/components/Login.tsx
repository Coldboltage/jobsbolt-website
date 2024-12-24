import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()



  const fetchJwt = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: email, password }),
      credentials: 'include', // Include cookies

    })

    const data: { access_token: string } = await response.json()
    console.log(response)
    if (response.statusText === "Unauthorized"
    ) {
      console.error("Something went wrong")
    } else {
      localStorage.setItem('jwtToken', data.access_token)
      setEmail("")
      setPassword("")
      document.cookie = `jwt=${data.access_token}; path=/;`;
      router.push('/jobs')
    }
  }


  return (
    <div className="min-h-screen bg-slate-800">
      <div className="max-w-screen-lg mx-auto flex flex-col align-middle justify-center text-center  py-60 ">
        <h1 className="text-4xl pb-10">Login Page</h1>
        <div>
          <form action="" className="flex flex-row gap-4 align-center justify-center">
            <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" name="" id="" placeholder="Email Address" className="p-1 px-4 text-gray-900 bg-gray-300 placeholder-slate-900" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" name="" id="" placeholder='Password' className="p-1 px-4 text-gray-900 bg-gray-300 placeholder-slate-900" />
            <input disabled={email.length === 0 || password.length === 0} onClick={(e) => fetchJwt(e)} type="submit" value="Login" className="bg-slate-600 p-2 px-4" />
          </form>
        </div>


      </div>
    </div>
  )
}

export default Login