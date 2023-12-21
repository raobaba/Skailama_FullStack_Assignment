import React from "react";
import { useRef } from "react";

function Setting() {
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
  };
  return (
    <div>
      <div className=" ml-14 flex items-center">
        <div className="w-20 h-20 rounded-full border bg-gray-300 mr-4 cursor-pointer" onClick={handleFileClick} ></div>
        <div className="flex justify-center gap-5">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden" 
            onChange={handleFileChange}
          />
          <input
            type="text"
            className="border border-gray-400 rounded-md px-2 py-1"
            placeholder="username"
          />
          <input
            type="text"
            className="border border-gray-400 rounded-md px-2 py-1"
            placeholder="email"
          />
          <button
            type="submit"
            className="border border-purple-900 text-purple-700 font-semibold rounded-md px-2 py-1"
            placeholder="email"
          >
            Update
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-purple-700 mt-8 ml-14">
          Subscriptions
        </h1>
        <div className="w-10/12 h-12 mt-8 ml-14 flex justify-between rounded-lg bg-gradient-to-r from-purple-600 to-purple-900">
          <div className="flex justify-center items-center ml-5">
            <p className="text-stone-100 ">
              You are currently on the{" "}
              <span className="font-semibold text-xl underline cursor-pointer">
                Ques AI Basic Plan
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center mr-5">
            <button className="w-20 h-8 bg-stone-100 rounded-md font-semibold text-xs">
              upgrade
            </button>
          </div>
        </div>
        <p className="font-bold text-red-700 ml-14 mt-8 underline cursor-pointer">
          Cencel Subscription
        </p>
      </div>
    </div>
  );
}

export default Setting;
