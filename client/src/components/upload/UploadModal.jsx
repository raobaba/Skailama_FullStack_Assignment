import React, { useState, useRef, useEffect } from "react";
import { API } from "../../utils/Api.js";

const UploadModal = ({ isOpen, onClose, addTranscript, selectedItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [nameError, setNameError] = useState('');
  const [linkError, setLinkError] = useState('');
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const handleNameInputChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleLinkInputChange = (e) => {
    setDescription(e.target.value);
    setLinkError('');
  };

  const handleSubmit = () => {
    if (name.trim() === '') {
      setNameError("Name field can't be empty");
      return;
    }

    if (description.trim() === '') {
      setLinkError("Link field can't be empty");
      return;
    }

    addTranscript({ name, description });
    setName('');
    setDescription('');
    onClose();
  };

  return (
    <div className={`fixed top-0 left-0 flex justify-center items-center w-full h-full ${isOpen ? "" : "hidden"}`}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div ref={modalRef} className="modal-container bg-white w-8/12 rounded-xl shadow-lg z-50 p-6">
        <div className="modal-header flex gap-4 items-center">
          <img src={selectedItem.url} alt="file_url" className="w-14 h-14 rounded-full" />
          <h3 className="text-4xl mt-6 mb-6 text-gray-500 font-bold">{selectedItem.text}</h3>
        </div>
        <div className="modal-body">
          <label htmlFor="projectName" className="flex mb-2 justify-start ml-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Type here..."
            onChange={handleNameInputChange}
            className="border rounded w-full py-2 px-3 mb-3"
          />
          {nameError && <p className="text-red-500 ml-1 mb-3 text-xs mt-[-10px] flex justify-start">{nameError}</p>}
          <label htmlFor="projectLink" className="flex mb-2 justify-start ml-1">
             Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="Type here..."
            value={description}
            onChange={handleLinkInputChange}
            className="border rounded w-full py-2 px-3 mb-3"
          />
          {linkError && <p className="text-red-500 ml-1 text-xs mt-[-10px] flex justify-start">{linkError}</p>}
        </div>
        <div className="modal-footer mt-8 flex justify-end">
          <button onClick={handleSubmit} className="px-4 py-2 bg-purple-700 text-white font-semibold rounded-3xl">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
