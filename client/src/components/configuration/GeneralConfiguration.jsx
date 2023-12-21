import React from "react";

function InputField({ id, label, placeholder, helperText }) {
  return (
    <div className="mb-4 max-w-full">
      <label htmlFor={id} className="block font-semibold text-md text-gray-600 mb-2">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="w-full px-3 py-2 border rounded-md text-md focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
      />
      <span className="text-gray-500 text-xs">{helperText}</span>
    </div>
  );
}

function GeneralConfiguration() {
  return (
    <div className="mx-auto max-w-full ">
      <InputField
        id="chatbot-name"
        label="Chatbot Name"
        placeholder="Enter Chatbot Name"
        helperText="Lorem ipsum dolor sit amet"
      />
      <InputField
        id="welcome-message"
        label="Welcome Message"
        placeholder="Enter Welcome Message"
        helperText="Lorem ipsum dolor sit amet"
      />
      <InputField
        id="input-placeholder"
        label="Input Placeholder"
        placeholder="Enter Input Placeholder"
        helperText="Lorem ipsum dolor sit amet"
      />
    </div>
  );
}

export default GeneralConfiguration;
