import React, { useState } from "react";
import Top from "../../assets/images/Vector1.png";
import Bottom from "../../assets/images/Vector.png";
import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
  PiNumberCircleFourFill,
} from "react-icons/pi";
import { RiSettings5Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

function UploadSidebar() {
  const [activeSection, setActiveSection] = useState("project-section");
  const location = useLocation();

  const handleSetActive = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <div>
          <Link className="flex justify-around mt-6 " to="/">
            <div className="Logo h-4 transition-opacity duration-300 ml-7 ease-in-out">
              <img
                className="pt-1 ml-1"
                src={Top}
                alt="logo"
                width={18}
                height={13}
              />
              <img
                className="mt-[-5px]"
                src={Bottom}
                alt="logo"
                width={31}
                height={25}
              />
            </div>
            <div>
              <h1 className="text-purple-800 mr-32 font-sans font-bold mt-1 text-2xl leading-12 tracking-normal">
                LAMA.
              </h1>
            </div>
          </Link>
          <p className="ml-8 mt-6 font-semibold">Podcast upload flow</p>
        </div>
        <div>
          <Link
            className={`flex mt-2 items-center w-11/12 py-3 px-5 mx-2 rounded-3xl ${
              activeSection === "project-section"
                ? "bg-purple-700 text-white"
                : "hover:bg-gray-200"
            }`}
            to="/upload/project-section"
            onClick={() => handleSetActive("project-section")}
          >
            <PiNumberCircleOneFill
              size={20}
              className=" bg-slate-100 text-slate-700 rounded-full"
            />
            <p className="ml-2">Projects</p>
          </Link>
          <Link
            className={`flex mt-2 items-center w-11/12 py-3 px-5 mx-2 rounded-3xl ${
              activeSection === "configurations"
                ? "bg-purple-700 text-white"
                : "hover:bg-gray-200"
            }`}
            to="/upload/configurations"
            onClick={() => handleSetActive("configurations")}
          >
            <PiNumberCircleTwoFill
              size={20}
              className=" bg-slate-100 text-slate-700 rounded-full"
            />
            <p className="ml-2">Winget Configurations</p>
          </Link>
          <Link
            className={`flex mt-2 items-center w-11/12 py-3 px-5 mx-2 rounded-3xl ${
              activeSection === "deployment"
                ? "bg-purple-700 text-white"
                : "hover:bg-gray-200"
            }`}
            to="/upload/deployment"
            onClick={() => handleSetActive("deployment")}
          >
            <PiNumberCircleThreeFill
              size={20}
              className=" bg-slate-100 text-slate-700 rounded-full"
            />
            <p className="ml-2">Deployment</p>
          </Link>
          <Link
            className={`flex mt-2 items-center w-11/12 py-3 px-5 mx-2 rounded-3xl ${
              activeSection === "pricing"
                ? "bg-purple-700 text-white"
                : "hover:bg-gray-200"
            }`}
            to="/upload/pricing"
            onClick={() => handleSetActive("pricing")}
          >
            <PiNumberCircleFourFill
              size={20}
              className=" bg-slate-100 text-slate-700 rounded-full"
            />
            <p className="ml-2">Pricing</p>
          </Link>
        </div>
      </div>
      <div>
        <Link
          className={`flex items-center w-11/12 py-3 px-5 mx-2 rounded-3xl border-slate-500 ${
            activeSection === "settings" ? "bg-purple-700 text-white" : "hover:bg-gray-200"
          }`}
          to="/upload/settings"
          onClick={() => handleSetActive("settings")}
        >
          <RiSettings5Line
            size={20}
            className=" bg-slate-100 text-slate-700 rounded-full"
          />
          <p className="ml-2">Setting</p>
        </Link>
      </div>
    </div>
  );
}

export default UploadSidebar;
