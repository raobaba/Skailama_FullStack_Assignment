import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaPen } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
const EditTranscript = () => {
  const location = useLocation();
  const { descriptions } = location.state || [];

  const [editMode, setEditMode] = useState(false);
  const [editedDescriptions, setEditedDescriptions] = useState(
    descriptions || []
  );
  const navigate = useNavigate();
  const { projectName } = useParams();

  const handleReturnToTranscript = (descriptions) => {
    navigate(`/upload/${projectName}/project-section`);
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleDescriptionChange = (e) => {
    const updatedDescription = e.target.value;
    setEditedDescriptions(updatedDescription.split("\n"));
  };
  

  return (
    <div className="w-10/12 mx-auto p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold text-purple-700">
            Edit Transcript
          </h1>
        </div>
        <div className="flex gap-2">
          {editMode && (
            <>
              <button
                className="text-xl font-bold border-purple-700 text-purple-700 border px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out"
                onClick={handleEditClick}
              >
                Discard
              </button>
              <button
                className="text-xl font-bold border px-4 py-2 rounded-md bg-slate-950 text-white hover:bg-purple-800 transition duration-300 ease-in-out"
                onClick={()=>handleReturnToTranscript()}
              >
                Save & Exit
              </button>
            </>
          )}
        </div>
      </div>
      {editMode ? (
        <div className="border border-gray-300 mt-5 pb-2 rounded-md p-2 w-full h-96 resize-y">
          <button
            className="mt-2 px-3 py-1 w-20 h-8 flex bg-black text-white rounded-3xl"
            
          >
            <FaPen className="mt-1" />
            edit
          </button>
          <textarea
            className="rounded-md p-2 w-full h-80 resize-y"
            value={editedDescriptions.join("\n")}
            onChange={handleDescriptionChange}
            wrap="soft"
          />
        </div>
      ) : (
        editedDescriptions.map((description, index) => (
          <div
            key={index}
            className="border border-gray-300 mt-8 pb-2  rounded-md p-2 w-full h-96 resize-y"
          >
            <button
              className="mt-2 px-3 py-1 w-20 h-8 flex bg-black text-white rounded-3xl"
              onClick={handleEditClick}
            >
              <FaPen className="mt-1" />
              edit
            </button>
            <div className="rounded-md p-2 w-full h-80 resize-y">
              {description}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default EditTranscript;
