import React, { useState, useRef, useEffect } from "react";

const NewProjectModal = ({ isOpen, onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const handleInputChange = (e) => {
    setProjectName(e.target.value);
    setError("");
  };

  const handleSubmit = () => {
    if (projectName.trim() === "") {
      setError("Project name can't be empty");
      return;
    }
    onClose(projectName);
  };

  return (
    <div className={`fixed top-0 left-0 flex justify-center items-center w-full h-full ${isOpen ? "" : "hidden"}`}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div ref={modalRef} className="modal-container bg-white w-8/12 rounded-xl shadow-lg z-50 p-6">
        <div className="modal-header flex justify-between items-center">
          <h3 className="text-3xl mb-6 font-bold">Create Project</h3>
        </div>
        <div className="modal-body">
          <label htmlFor="projectName" className="flex mb-3 justify-start ml-1">
            Enter Project Name:
          </label>
          <input
            type="text"
            id="projectName"
            placeholder="Type here..."
            value={projectName}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3 mb-3"
          />
          {error && <p className="text-red-500 ml-1 text-xs mt-[-10px] flex justify-start">{error}</p>}
        </div>
        <div className="modal-footer mt-8 flex justify-end">
          <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded-lg">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-purple-700 text-white rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProjectModal;
