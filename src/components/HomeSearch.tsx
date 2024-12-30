import React from 'react';

const HomeSearch = () => {
  return (
    <div className="py-20 bg-gray-900">
      <form className="max-w-screen-md mx-auto flex flex-wrap items-center justify-center gap-4">
        <input
          required
          type="text"
          placeholder="Job Title"
          className="w-full sm:w-auto p-3 text-gray-900 bg-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Town, city"
          className="w-full sm:w-auto p-3 text-gray-900 bg-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="submit"
          value="Search Jobs"
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg cursor-pointer hover:bg-blue-700 transition"
        />
      </form>
    </div>
  );
};

export default HomeSearch;
