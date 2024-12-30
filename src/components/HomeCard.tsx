import React from 'react';
import { IconType } from 'react-icons';

const HomeCard = ({ title, subTitle, icon: Icon }: { title: string; subTitle: string; icon: IconType }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
      {Icon && <Icon className="text-4xl text-blue-400 mb-4" />}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{subTitle}</p>
    </div>
  );
};

export default HomeCard;
