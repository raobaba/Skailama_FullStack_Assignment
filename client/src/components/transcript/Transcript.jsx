import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../utils/Api.js";
import Cookies from "js-cookie";

function Transcript({ fetchData, details ,setDetails }) {
  const navigate = useNavigate();
  const {projectName} = useParams();

  const handleEditClick = (item) => {
    const detailId = item._id;
    Cookies.set('detailId', detailId);
    const descriptionToSend = item.description; 
    navigate(`/upload/${projectName}/edit-transcript`, {
      state: { description: descriptionToSend },
    });
  };

  const handleDeleteClick = async (detailId) => {
    
    const uploadId = Cookies.get("uploadId");
    const fileId = Cookies.get("fileId");

    try {
      await API.deleteDetails(uploadId, fileId, detailId);
      const updatedTranscripts = details.filter(item => item._id !== detailId);
      setDetails(updatedTranscripts);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const formatTimeStamp = (timeStamp) => {
    const date = new Date(timeStamp);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear()
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedDay}:${formattedMonth}:${year} | ${formattedHours}:${formattedMinutes}`;
  };
  
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
                  <td className="border-b font-normal text-sm pl-16 shadow-border">
                  {formatTimeStamp(item.timeStamp)}
                  </td>
                  <td className="border-b pl-8 font-normal text-sm shadow-border">Done</td>
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
