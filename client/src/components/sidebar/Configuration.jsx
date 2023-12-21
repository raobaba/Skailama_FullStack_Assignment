import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GeneralConfiguration from '../configuration/GeneralConfiguration';
import DisplayConfiguration from '../configuration/DisplayConfiguration';
import AdvanceConfiguration from '../configuration/AdvanceConfiguration';

function Configuration() {
  const [activeTab, setActiveTab] = useState('General');

  const showConfiguration = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-10/12 ml-16">
      <h1 className='text-3xl font-bold text-purple-700'>Configuration</h1>
      <div className="flex justify-start gap-12 mt-8 items-center">
        <Link
          to="#"
          onClick={() => showConfiguration('General')}
          className={`${
            activeTab === 'General'
              ? 'text-purple-700 font-semibold border-b-4 border-purple-700'
              : 'text-gray-700 hover:text-blue-500'
          }`}
        >
          General
        </Link>
        <Link
          to="#"
          onClick={() => showConfiguration('Display')}
          className={`${
            activeTab === 'Display'
              ? 'text-purple-700 font-semibold border-b-4 border-purple-700'
              : 'text-gray-700 hover:text-blue-500'
          }`}
        >
          Display
        </Link>
        <Link
          to="#"
          onClick={() => showConfiguration('Advance')}
          className={`${
            activeTab === 'Advance'
              ? 'text-purple-700 font-semibold border-b-4 border-purple-700'
              : 'text-gray-700 hover:text-blue-500'
          }`}
        >
          Advance
        </Link>
      </div>
      <hr className="border-gray-300 mb-4" />
      <div>
        {activeTab === 'General' && <GeneralConfiguration />}
        {activeTab === 'Display' && <DisplayConfiguration />}
        {activeTab === 'Advance' && <AdvanceConfiguration />}
      </div>
    </div>
  );
}

export default Configuration;
