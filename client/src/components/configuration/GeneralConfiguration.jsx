import React from "react";

function GeneralConfiguration() {
  return (
    <div className="mx-auto max-w-full ">
      <div className="mb-4 max-w-full">
        <label htmlFor="chatbot-name" className="block font-semibold text-md text-gray-600 mb-2">
          Chatbot Name
        </label>
        <input
          type="text"
          id="chatbot-name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Chatbot Name"
        />
        <span className="text-gray-500 text-xs ">Lorem ipsuim dolor sit Lorem ipsuim dolor sit</span>
      </div>
      <div className="mb-4 max-w-full">
        <label htmlFor="welcome-message" className="block font-semibold text-md text-gray-600 mb-2">
          Welcome Message
        </label>
        <input
          type="text"
          id="welcome-message"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Welcome Message"
        />
         <span className="text-gray-500 font-thin text-xs ">Lorem ipsuim dolor sit Lorem ipsuim dolor sit</span>
      </div>
      <div className="mt-4 max-w-full">
        <label htmlFor="input-placeholder" className="block font-semibold text-md text-gray-600 mb-2">
          Input Placeholder
        </label>
        <input
          type="text"
          id="input-placeholder"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Input Placeholder"
        />
         <span className="text-gray-500 text-xs ">Lorem ipsuim dolor sit Lorem ipsuim dolor sit</span>
      </div>
    </div>
  );
}

export default GeneralConfiguration;
