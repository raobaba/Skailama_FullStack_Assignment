import React from "react";
import UploadSidebar from "./UploadSidebar";
import MetaData from "../../utils/Metadata";
import { Outlet } from "react-router-dom";

function Upload() {
  return (
    <>
      <MetaData title={"Skai Lama | upload"} />
      <div className="w-full min-h-screen border-gray-900 flex">
        <div className="w-1/5 bg-purple-100">
          <UploadSidebar />
        </div>
        <div className="w-4/5">
          <Outlet /> 
        </div>
      </div>
    </>
  );
}

export default Upload;
