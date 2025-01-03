import React from 'react';
import HomeCard from './HomeCard';
import { SiIndeed } from 'react-icons/si';
import { TbRulerMeasure } from 'react-icons/tb';
import { FaDiscord, FaMoneyBillAlt, FaRecycle } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import { AiOutlineOpenAI } from 'react-icons/ai';
import { FaScissors } from 'react-icons/fa6';

const HomeInformation = () => {
  return (
    <div className="bg-gray-900 py-20 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">What is Jobsbolt?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <HomeCard
            title="An Indeed Scraper"
            subTitle="An automated bot that searches Indeed for jobs by title and location, scanning all listings from the past 14 days to quickly surface the latest opportunities."
            icon={SiIndeed}
          />
          <HomeCard
            title="Job Suitability Checker"
            subTitle="Out of all the jobs searched and found, Jobsbolt determines the most suitable job for you, based on your CV, Cover Letter and search preference."
            icon={TbRulerMeasure}
          />
          <HomeCard
            title="Discord Integration"
            subTitle="After being authenticated with Discord, Jobsbolt will message you directly about the new jobs which you can apply for the day. No mobile numbers needed."
            icon={FaDiscord}
          />
          <HomeCard
            title="Cover Letter Generator"
            subTitle="Depending on the Job Description, CV, Base Cover Letter and your userPitch, Jobsbolt will generate a Cover Letter similar to the way you speak, reducing the time to write cover letters."
            icon={IoDocumentText}
          />
          <HomeCard
            title="Powered by OpenAI"
            subTitle="Using OpenAI GPT4o, with a combination of the Batch API and Structured outputs, Jobsbolt keeps outputs as relevant as possible while being hyper focused."
            icon={AiOutlineOpenAI}
          />
          <HomeCard
            title="Constant Updates"
            subTitle="Everyday, the five most suitable jobs for you will appear. Jobsbolt scans Indeed once a day, so the most relevant jobs are available for you to apply to."
            icon={FaRecycle}
          />
          <HomeCard
            title="Add a job you found"
            subTitle="If you find a job you think you'll be suitable for, add it to Jobsbolt! It'll still be able to check over the job to see how good a fit you are."
            icon={FaScissors}
          />
          <HomeCard
            title="Low cost"
            subTitle="Jobsbolt will operate as a pay as you go structure. You pay for only what you use. Pay for the computation and we're good!"
            icon={FaMoneyBillAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeInformation;
