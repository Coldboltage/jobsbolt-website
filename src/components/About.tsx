import React from 'react';
import { BsCursorFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-white mb-8">What is Jobsbolt?</h1>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Jobsbolt is a job-hunting assistant designed to streamline the often frustrating processes of finding suitable jobs and crafting tailored cover letters.
          It combines automation, personalization, and integration to make job-seeking easier, faster, and less mentally draining.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6">Key Features</h2>
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Icon SVG */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-white">An Indeed Scraper</h3>
                <p className="mt-2 text-gray-400">
                  Searches Indeed for jobs based on your title and location preferences. It scans job listings from the past 14 days
                  to ensure you&apos;re seeing the most relevant and recent opportunities. Saves time by cutting through clutter and surfacing
                  the latest and most relevant positions. After the first scan, Jobsbolt scans everyday for any new jobs.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Icon SVG */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5h4a2 2 0 012 2v10a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-white">Job Suitability Checker</h3>
                <p className="mt-2 text-gray-400">
                  After gathering potential jobs from Indeed, Jobsbolt runs a suitability check powered by OpenAI. This involves analyzing your CV,
                  a description of yourself, and your search preferences. Jobsbolt then provides a summary of how well each job aligns with your
                  profile, along with a suitability score. This comes in the form of a score of 0/100 with a suitability reason. Jobs over 85 will be shown.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Icon SVG */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-white">Discord Integration</h3>
                <p className="mt-2 text-gray-400">
                  Authenticated users receive direct job notifications via Discord. It removes the need for mobile numbers or email
                  notifications by delivering updates to a platform many users already use daily. Keeps the process low-friction and
                  easily accessible.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Icon SVG */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-white">Cover Letter Generator</h3>
                <p className="mt-2 text-gray-400">
                  Generates personalized cover letters based on the job description, your CV, and a customizable &quot;userPitch.&quot;
                  Tailors the tone to align with how you naturally communicate, ensuring a more authentic application.
                  Eliminates the repetitive task of writing new cover letters for every application.
                </p>
                <p className="mt-2 text-gray-400">
                  The generator ensures that your userPitch is incorporated seamlessly while also including relevant details from
                  your CV and job preferences to create a compelling, tailored cover letter.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex">
              <div className="flex-shrink-0">
                <BsCursorFill className="h-6 w-6 text-blue-400" />

              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-white">Manually Add Jobs</h3>
                <p className="mt-2 text-gray-400">
                  If there are jobs from another site, you can add them onto Jobsbolt. We can still look at the job and use the suitability critiera that we would generally use for Indeed, but for the new job submission
                </p>
                <p className="mt-2 text-gray-400">
                  In the future, we hope to have an extention that allows you to extra all the information, comes onto Jobsbolt and then adds it to the form for you automatically.
                </p>
              </div>
            </div>
          </div>


        </section>



        <section>
          <h2 className="text-3xl font-semibold text-white mb-6">Why Build Jobsbolt?</h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Jobsbolt was created out of frustration with the traditional job application process:
          </p>
          <div className="space-y-8">
            {/* Reason 1 */}
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Icon SVG */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-white">Cover Letter Fatigue</h3>
                <p className="mt-2 text-gray-400">
                  Writing individual cover letters for each job was exhausting and time-consuming. Cover letters should focus on
                  communicating genuine interest and highlighting relevant skills rather than being perfectly polished &quot;sales pitches.&quot;
                  Jobsbolt uses the &quot;userPitch&quot; to authentically express the applicant&apos;s interest without the formal constraints that
                  feel artificial or insincere.
                </p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Icon SVG */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 8h18M3 12h18M3 16h18M3 20h18" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-white">Finding the Right Job</h3>
                <p className="mt-2 text-gray-400">
                  Scrolling through endless job listings to find the perfect match is time-consuming and inefficient.
                  Jobsbolt helps you identify the most suitable jobs based on your CV, saving you time and effort.
                </p>
              </div>
            </div>

            {/* Real Talk */}
            <div className="flex">

              <div className="ml-4 mt-4">

                <h2 className="text-3xl font-semibold text-white mb-6">What Jobsbolt should be!</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  A message from Alan Reid:
                </p>

                <p className="mt-6 text-gray-400">
                  Jobsbolt isn&apos;t meant to fully take you out of the process of looking for a job. It&apos;s meant to make it easier. Instead of having to worry about making sure you&apos;ve got the cover letter done properly, you can be honest and state what you think makes you interested in the job, why you think you would be great for the job, and essentially express yourself the way you would if talking to a friend about the role. While you will have to repeat yourself a bit in each cover letter, it&apos;s going to be a lot quicker. You could voice dictate it if you want and copy the results into the userPitch.
                </p>
                <p className="mt-6 text-gray-400">
                  There&apos;s always going to be a grind when looking for a new job. I built the Indeed scraper so you would be able to at least search for the job once, and then be given the best jobs that apply to you. It&apos;s in your best interest to be as descriptive as possible about yourself within the profile and state what type of job you want. Rather than thinking if you have the skills for the job or not, or if the job is even correct for you, Jobsbolt pretty much figures it out on its own. I&apos;ve added the manual add job feature to the site in case you find another job that you think would be fantastic for you, and this will work a little differently. While using Indeed, all jobs need to be above 85/100, but manual jobs will bypass this, as it is intended to allow you the choice. At the end of the day, AI can still be incorrect and it&apos;s possible that a lot of the jobs being suggested to you might not be as great as stated.
                </p>
                <p className="mt-6 text-gray-400">
                  My hope is that by using this site, you&apos;re able to put in the best effort in your job hunting endeavors, rather than stressing about having to apply every day. I hope Jobsbolt allows you to find the best job for you, help you build a cover letter that sounds somewhat like you very quickly, and then go for it. There&apos;s nothing worse than having to manually add this stuff.
                </p>
                <p className="mt-6 text-gray-400">
                  As of the 11th of January 2025, I too am looking for a job and will be updating my progress while thinking of ideas to better improve Jobsbolt. I have found that for myself, remote jobs are going to be my ticket to a job. The longer it takes to find a job, the more I can improve Jobsbolt, and I will most likely keep supporting this website. For now, this runs on very cheap hardware.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
