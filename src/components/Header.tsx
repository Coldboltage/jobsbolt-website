import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex justify-between py-4 px-5">
      <div>
        <h1 className="text-sm md:text-md"><Link href="/">Jobsbolt</Link></h1>
      </div>
      <div className="">
        <ul className="flex flex flex-row space-x-6">
          <li className="text-sm md:text-md"><Link href={'/account'}>Account</Link></li>
          <li className="text-sm md:text-md"><Link href={`/jobs`}>Jobs</Link></li>
          <li className="text-sm md:text-md"><Link href={`/add-job`}>Add Job</Link></li>
          <li className="text-sm md:text-md"><Link href={`/about`}>About</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header