import React, { useState } from "react";
import { CgToggleOn, CgToggleOff } from "react-icons/cg";
import { RxUpload } from "react-icons/rx";

function DisplayConfiguration() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="overflow-y-scroll max-h-[410px]">
      <div className="mx-auto max-w-full h-[70%] ">
        <div className="mx-auto max-w-full flex justify-center h-28">
          <div className=" mt-4 sm:w-1/2">
            <label className="font-semibold" htmlFor="primaryColor">
              Primary Color
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Choose"
                className="w-5/6 mr-2 px-2 py-1 my-1 border rounded"
              />
              <input type="color" className="w-12 h-10 rounded-xl" />
            </div>
            <span className="text-gray-500 text-xs">
              Lorem ipsum dolor sit amet
            </span>
          </div>

          <div className=" mt-4 sm:w-1/2">
            <label className="font-semibold ml-10" htmlFor="primaryColor">
              Font Color
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Choose"
                className="w-10/12 mr-2 px-2 ml-10 py-1 my-1 border rounded"
              />
              <input type="color" className="w-12 h-10 rounded-xl" />
            </div>
            <span className="text-gray-500 text-xs ml-10">
              Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
        <div className="mx-auto max-w-full flex justify-center h-28">
          <div className=" mt-4 sm:w-1/2">
            <label className="font-semibold" htmlFor="primaryColor">
              Font Size (in px)
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Choose"
                className="w-11/12 mr-2 px-2 py-1 my-1 border rounded"
              />
            </div>
            <span className="text-gray-500 text-xs">
              Lorem ipsum dolor sit amet
            </span>
          </div>
          <div className=" mt-4 sm:w-1/2">
            <label className="font-semibold ml-10" htmlFor="primaryColor">
              Chat Height (in % of total screen)
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Choose"
                className="w-11/12 mr-2 px-2 py-1 my-1 ml-10 border rounded"
              />
            </div>
            <span className="text-gray-500 text-xs ml-10">
              Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-full  h-16 mt-5 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold mb-2">Show Sources</h1>
          <span className="text-gray-500 text-xs block">
            Lorem ipsum dolor sit amet
          </span>
        </div>
        <div>
          {isToggled ? (
            <button onClick={toggle} className="focus:outline-none">
              <CgToggleOff size={30} className="w-16 h-12 text-gray-400" />
            </button>
          ) : (
            <button onClick={toggle} className="focus:outline-none">
              <CgToggleOn size={30} className="w-16 h-12 text-blue-700 mr-2" />
            </button>
          )}
        </div>
      </div>
      <hr className="border-gray-300 mt-5" />
      <h1 className="text-purple-700 font-bold text-2xl mt-10">Chat Icon</h1>
      <div className="mx-auto max-w-full h-48">
        <div className="mx-auto max-w-full flex justify-center h-20">
          <div className=" mt-4 sm:w-1/2">
            <label className="font-semibold" htmlFor="primaryColor">
              Chat Icon Size
            </label>
            <div className="flex">
              <select className="w-11/12 mr-2 text-gray-500 px-2 py-1 my-1 border rounded appearance-none">
                <option value="" selected disabled hidden>
                  Small (48*48 px)
                </option>
                <option value="small">Xtra Large</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>

          <div className=" mt-4 sm:w-1/2">
            <label className="font-semibold ml-10" htmlFor="primaryColor">
              Position on Screen
            </label>
            <div className="flex">
              <select className="w-11/12 text-gray-500 mr-2 px-2 ml-10 py-1 my-1 border rounded appearance-none">
                <option value="" selected disabled hidden>
                  Bottom right
                </option>
                <option value="small">Bottom left</option>
                <option value="medium">Top right</option>
                <option value="large">Top left</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-full flex justify-center h-20">
          <div className=" mt-4 sm:w-1/2">
            <label className="font-semibold" htmlFor="primaryColor">
              Distance from Bottom (in px)
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Choose"
                className="w-11/12 mr-2 px-2 py-1 my-1 border rounded"
              />
            </div>
          </div>
          <div className=" mt-4 sm:w-1/2">
            <label className="font-semibold ml-10" htmlFor="primaryColor">
              Horizontal Distance (in px)
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Choose"
                className="w-11/12 mr-2 px-2 py-1 my-1 ml-10 border rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-full  h-28">
        <h1 className="font-bold text-xl">Bot Icon</h1>
        <div className="flex mt-5 items-center">
          <div className="w-16 h-16 rounded-full border bg-gray-300"></div>
          <label htmlFor="file-upload" className="ml-3 cursor-pointer">
            <input id="file-upload" type="file" className="hidden" />
            <button className="bg-purple-700 text-white px-1 py-1 flex rounded-md">
              Upload Image <RxUpload size={20} className="ml-2"/>
            </button>
            
          </label>
        </div>
      </div>
    </div>
  );
}

export default DisplayConfiguration;
