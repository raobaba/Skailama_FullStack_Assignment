import React from "react";
import { Outlet, useParams } from "react-router-dom";
import MetaData from "../../utils/Metadata";
import UploadSidebar from "./UploadSidebar";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiTwotoneHome } from "react-icons/ai";

function Upload() {
  const { projectName } = useParams();

  return (
    <>
      <MetaData title={"Skai Lama | upload"} />
      <div className="w-full min-h-screen border-gray-900 flex">
        <div className="w-1/5 bg-purple-100">
          <UploadSidebar />
        </div>
        <div className="w-4/5">
          <div className="w-full h-16 border border-slate-600 mt-10 flex items-center justify-between px-4">
            <div className="flex">
              <h1><AiTwotoneHome size={22} className="mt-1"/></h1>
              <h1 className="text-lg font-bold ml-2"> / {projectName} / upload</h1>
            </div>
            <div className="flex items-center space-x-4">
              <select
                className="px-2 py-1 border rounded-md"
                name="country"
                id="country"
              >
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <p className="text-gray-700">Country Name</p>
              <div className="text-2xl">Country Icon</div>
              <IoNotificationsOutline className="text-3xl mt-1" />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Upload;
