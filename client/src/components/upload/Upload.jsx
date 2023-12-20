import React from "react";
import { Outlet, useParams } from "react-router-dom";
import MetaData from "../../utils/Metadata";
import UploadSidebar from "./UploadSidebar";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiTwotoneHome } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import EN from '../../assets/images/EN-icon.png';

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
              <h1><AiTwotoneHome size={22} className=" text-purple-700"/></h1>
              <h1 className="text-md font-semibold ml-2 text-gray-400"> / {projectName}</h1>
              <h1 className="text-purple-700 text-md font-semibold ml-2"> / upload</h1>
            </div>
            <div className="flex items-center">
             <TiArrowSortedDown size={25}/>
              <p className="text-gray-900 font-bold ">EN</p>
              <div className="text-2xl">
                <img src={EN} alt="EN" className="w-8 h-8 rounded-full ml-3"/>
              </div>
              <IoNotificationsOutline className="text-3xl mt-1 mr-5 ml-6" />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Upload;
