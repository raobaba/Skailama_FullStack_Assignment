import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../utils/Api.js";
import Cookies from "js-cookie";

function Transcript({ fetchData, details ,setDetails }) {
  const navigate = useNavigate();
  const { projectName } = useParams();

  const handleEditClick = (item) => {
    console.log("Update clicked for detailId:", item);
    const detaildId = item._id;
    const description = item.description;
    const uploadId = Cookies.get("uploadId");
    const fileId = Cookies.get("fileId");
    const nameToSend = details[detaildId];
    navigate(`/upload/${projectName}/edit-transcript`, {
      state: { name: nameToSend },
    });
  };

  const handleDeleteClick = async (detailId) => {
    
    const uploadId = Cookies.get("uploadId");
    const fileId = Cookies.get("fileId");
    console.log("uploadId:", uploadId);
    console.log("fileId:", fileId);
    console.log("detailId:", detailId);
    try {
      await API.deleteDetails(uploadId, fileId, detailId);
      const updatedTranscripts = details.filter(item => item._id !== detailId);
      console.log("Updated Transcripts:", updatedTranscripts);
      setDetails(updatedTranscripts);
    
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  console.log("details", details);

  return (
    <div className="ml-16 mt-4">
      <div className="w-10/12 h-12 flex justify-between rounded-lg bg-purple-700">
        <div className="flex justify-center items-center ml-5">
          <p className="text-stone-100 font-semibold text-sm">
            All files are processed! Your winget is ready to go!
          </p>
        </div>
        <div className="flex justify-center items-center mr-5">
          <button className="w-20 h-8 bg-stone-100 rounded-md font-semibold text-xs">
            Try it out!
          </button>
        </div>
      </div>
      <div>
        <table className="border-collapse w-10/12 mt-4 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="font-medium">
              <th className="border-b border-t pr-10 border-l">Name</th>
              <th className="border-b border-t pr-10">Upload Date & Time</th>
              <th className="border-b border-t py-2 pr-10">Status</th>
              <th className="border-b border-t border-r py-2 pr-8">Action</th>
            </tr>
          </thead>
          <tbody>
            {details && details.length > 0 ? (
              details.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "" : ""}>
                  <td className="border-b border-l pl-16 shadow-border">
                    {item.name}
                  </td>
                  <td className="border-b pl-16 shadow-border">
                    12 Dec 21 | 07:52
                  </td>
                  <td className="border-b pl-8 shadow-border">Done</td>
                  <td className="border-b border-r flex pl-12 py-2 shadow-border">
                    <button
                      className="border w-10 h-7 text-sm font-medium cursor-pointer"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(item._id)}
                      className="border w-16 h-7 text-sm font-medium cursor-pointer text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transcript;
