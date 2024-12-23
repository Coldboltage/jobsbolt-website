import React from 'react'
import { IconType } from 'react-icons'


const HomeCard = ({ title, subTitle, icon: Icon }: { title: string, subTitle: string, icon: IconType }) => {
  return (
    <div className="bg-gray-700 p-5">
      {Icon && <Icon className="text-4xl mb-2" />}
      <h3 className="text-2xl pt-2 pb-4 font-bold">{title}</h3>
      <p>{subTitle}</p>
    </div>
  )
}

export default HomeCard