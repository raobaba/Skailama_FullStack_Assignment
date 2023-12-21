import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

const EditTranscript = () => {
  const location = useLocation();
  const { description } = location.state || {};

  const [editMode, setEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description || "");
  const navigate = useNavigate();
  const { projectName } = useParams();

  const handleReturnToTranscript = () => {
    navigate(`/upload/${projectName}/project-section`);
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleDescriptionChange = (e) => {
    const updatedDescription = e.target.value;
    setEditedDescription(updatedDescription);
  };

  useEffect(() => {
    setEditedDescription(description || "");
  }, [description]);

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
                onClick={handleReturnToTranscript}
              >
                Save & Exit
              </button>
            </>
          )}
        </div>
      </div>
      {editMode ? (
        <div className="border border-gray-300 mt-5 pb-2 rounded-md p-2 w-full h-96 resize-y">
          <div className="flex justify-between">
            <div>
              <button
                className="px-3 mt-1 py-1 w-20 h-8 flex bg-black text-white rounded-3xl"
                onClick={handleEditClick}
              >
                <FaPen className="mt-1 mr-2" />
                edit
              </button>
            </div>
            <div className="w-6 h-6 rounded-full border flex justify-center text-red-600 border-red-500 items-center bg-slate-100">
              <MdSearch />
            </div>
          </div>
          <textarea
            className="rounded-md p-2 w-full h-80 mt-3 resize-y"
            value={editedDescription}
            onChange={handleDescriptionChange}
            wrap="soft"
          />
        </div>
      ) : (
        <div className="border border-gray-300 mt-8 pb-2 rounded-md p-2 w-full h-96 resize-y">
          <div className="flex justify-between">
            <div>
              <button
                className="px-3 mt-1 py-1 w-20 h-8 flex bg-black text-white rounded-3xl"
                onClick={handleEditClick}
              >
                <FaPen className="mt-1 mr-2" />
                edit
              </button>
            </div>
            <div className="w-6 h-6 rounded-full border flex justify-center text-red-600 border-red-500 bg-slate-100 items-center">
              <MdSearch />
            </div>
          </div>
          <div className="rounded-md p-2 w-full h-80 mt-3 resize-y">
            {editedDescription}
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTranscript;