import React from 'react'
import { BsLightningCharge } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="pt-40 bg-gray-900">
      <div className="flex justify-center gap-4">
        <h2 className="text-6xl font-bold text-white mb-12 text-center">Jobsbolt </h2>
        <BsLightningCharge className="text-6xl text-blue-500" />

      </div>
      <div className="px-5">
        <p className="text-center text-2xl pb-2">An easier way to find the most suitable jobs you want.</p>
        <p className="text-center text-2xl">A combination of using a bit of AI the right way, while keeping the process as human as possible.</p>

      </div>


    </div>
  )
}

export default Hero