import React from 'react';

const DefaultPageLayout = ({ pageName, children }: { pageName: string; children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white">{pageName}</h1>
          <p className="mt-2 text-gray-300">
          </p>
        </header>
        <main className="flex flex-col gap-6">{children}</main>
      </div>
    </div>
  );
};

export default DefaultPageLayout;
