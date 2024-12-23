import React from 'react'

const HomeSearch = () => {
  return (
    <div className=" py-60 bg-slate-800">
      <form className="space-x-5 container mx-auto flex justify-center">
        <input required type="text" name="" id="" placeholder="Job Title" className="p-1 px-4 text-gray-900 bg-gray-300 placeholder-slate-900" />
        <input type="text" name="" id="" placeholder='Town, city' className="p-1 px-4 text-gray-900 bg-gray-300 placeholder-slate-900" />
        <input type="submit" value="Add Search" className="bg-slate-600 p-2 px-4" />
      </form>


    </div>
  )
}

export default HomeSearch