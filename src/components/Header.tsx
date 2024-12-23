import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex justify-between py-4">
      <div>
        <h1><Link href="/">Jobsbolt</Link></h1>
      </div>
      <div className="">
        <ul className="flex flex flex-row space-x-6">
          <li><Link href={'/account'}>Account</Link></li>
          <li><Link href={`/jobs`}>Jobs</Link></li>
          <li><Link href={`/add-job`}>Add Job</Link></li>
          <li><Link href={`/about`}>About</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header