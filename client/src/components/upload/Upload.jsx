import React, { useEffect } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import MetaData from "../../utils/Metadata";
import UploadSidebar from "./UploadSidebar";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiTwotoneHome } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import EN from "../../assets/images/EN-icon.png";

function Upload() {
  const { projectName } = useParams();
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];

  useEffect(() => {
    console.log("Last segment:", lastSegment);
  }, [lastSegment]);

  const displaySegment =
  lastSegment === "project-section"
    ? "Upload"
    : lastSegment === "configurations"
    ? "Configuration"
    : lastSegment === "pricing"
    ? "Pricing"
    : lastSegment === "deployment"
    ? "Deployment"
    : lastSegment === "settings"
    ? "Account Settings"
    : "";
  return (
    <>
      <MetaData title={"Skai Lama | upload"} />
      <div className="w-full min-h-screen border-gray-900 flex">
        <div className="w-1/5 bg-purple-100">
          <UploadSidebar />
        </div>
        <div className="w-4/5">
          <div className="w-full h-16 mt-5 flex items-center justify-between px-4">
            <div className="flex ml-12">
              <AiTwotoneHome size={22} className="text-purple-700" />
              <span  className="text-md font-semibold ml-2 text-gray-400">
                {" "}
                / {projectName}
              </span>
              <span className="text-purple-700 text-md font-semibold ml-2">
                {" "}
                / {displaySegment}
              </span>
            </div>
            <div className="flex items-center">
              <TiArrowSortedDown size={25} />
              <p className="text-gray-900 font-bold">EN</p>
              <div className="text-2xl">
                <img src={EN} alt="EN" className="w-8 h-8 rounded-full ml-3" />
              </div>
              <IoNotificationsOutline className="text-3xl mr-5 ml-6" />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Upload;
