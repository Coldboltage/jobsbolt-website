import React from 'react';

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
                  the latest and most relevant positions.
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
                  profile, along with a suitability score.
                </p>
                <p className="mt-2 text-gray-400">
                  If you&apos;re interested in a job, you can indicate your interest. Then, you write a &quot;userPitch,&quot; which is an unfiltered explanation
                  of why you&apos;re a great fit for the role and why you&apos;re interested. Don&apos;t worry about formality, Jobsbolt uses this input,
                  along with your CV and preferences, to craft a tailored cover letter.
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
