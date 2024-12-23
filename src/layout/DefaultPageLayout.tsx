import React from 'react'

const DefaultPageLayout = ({ pageName, children }: { pageName: string; children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-700 py-10">
      <div className="max-w-screen-lg mx-auto">
        <div className="">
          <h1 className="text-4xl pb-10">{pageName}</h1>
          <div className="flex gap-6 mb-4">
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultPageLayout