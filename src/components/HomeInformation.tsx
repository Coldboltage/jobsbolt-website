import React from 'react'
import HomeCard from './HomeCard'
import { SiIndeed } from 'react-icons/si'
import { TbRulerMeasure } from 'react-icons/tb'
import { FaDiscord } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'

const HomeInformation = () => {
  return (
    <div className="bg-gray-500">
      <div className="max-w-screen-lg mx-auto flex flex-col py-10">
        <h2 className="text-4xl pb-10">What is Jobsbolt?</h2>
        <div className="grid grid-cols-2 grid-row-2 gap-4">
          <HomeCard title="An Indeed Scrapper" subTitle="An automated bot that searches Indeed for jobs by title and location, scanning all listings from the past 14 days to quickly surface the latest opportunities." icon={SiIndeed} />
          <HomeCard title="Job Suitability Checker" subTitle="Out of all the jobs searched and found, Jobsbolt determines the most suitable job for you, based on your CV, Cover Letter and search preference" icon={TbRulerMeasure} />
          <HomeCard title="Discord Integration" subTitle="After being authenticated with Discord, Jobsbolt will message you directly about the new jobs which you can apply for the day. No mobile numbers needed" icon={FaDiscord} />
          <HomeCard title="Cover Letter Generator" subTitle="Depending on the Job Description, CV, Base Cover Letter and your userPitch, Jobsbolt will generate a Cover Letter similar to the way you speak, reducing the time to write cover letters" icon={IoDocumentText} />

        </div>
      </div>
    </div>

  )
}

export default HomeInformation