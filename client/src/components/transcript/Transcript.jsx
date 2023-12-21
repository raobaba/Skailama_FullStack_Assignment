import React from "react";
import { useNavigate, useParams } from 'react-router-dom';

function Transcript({ name = [], descriptions = [], setTranscriptList, transcriptList }) {
  const navigate = useNavigate();
  const { projectName } = useParams();

  const handleEditClick = (index) => {
    const descriptionToSend = descriptions[index];
    navigate(`/upload/${projectName}/edit-transcript`, { state: { description: descriptionToSend } });
  };

  const handleDeleteClick = (index) => {
    console.log('Delete clicked for index:', index);
    if (Array.isArray(transcriptList)) {
      const updatedTranscripts = transcriptList.filter((_, i) => i !== index);
      console.log('Updated Transcripts:', updatedTranscripts);
      setTranscriptList(updatedTranscripts);
    }
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
            {name.map((name, index) => (
              <tr key={index} className={index % 2 === 0 ? "" : ""}>
                <td className="border-b border-l pl-16 shadow-border">
                  {name}
                </td>
                <td className="border-b pl-16 shadow-border">
                  12 Dec 21 | 07:52
                </td>
                <td className="border-b pl-8 shadow-border">Done</td>
                <td className="border-b border-r flex pl-12 py-2 shadow-border">
                  <button
                    className="border w-10 h-7 text-sm font-medium cursor-pointer"
                    onClick={() => handleEditClick(index)}
                  >
                    Edit
                  </button>
                  <button 
                   onClick={() => handleDeleteClick(index)}
                  className="border w-16 h-7 text-sm font-medium cursor-pointer text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transcript;
