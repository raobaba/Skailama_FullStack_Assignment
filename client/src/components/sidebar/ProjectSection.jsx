import React, { useState } from "react";
import YouTube from "../../assets/images/youtube.png";
import Spotify from "../../assets/images/spotify.png";
import RSS from "../../assets/images/RSS.png";
import { MdOutlineCloudUpload } from "react-icons/md";

function ProjectSection() {
  const [fileUpload, setFileUpload] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFileUpload(uploadedFile);
  };

  const uploadItems = [
    { image: YouTube, text: "Upload YouTube Video" },
    { image: Spotify, text: "Upload Spotify Podcast" },
    { image: RSS, text: "Upload from RSS Feed" },
    { image: YouTube, text: "Upload YouTube Video" },
    { image: Spotify, text: "Upload Spotify Podcast" },
    { image: RSS, text: "Upload from RSS Feed" },
  ];

  return (
    <div className="container mx-auto py-1">
      <h1 className="text-3xl font-bold ml-16 mb-4 text-purple-700">Upload</h1>
      <div className="grid ml-16 grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 w-10/12">
        {uploadItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white w-60 cursor-pointer h-20 border border-gray-300 p-4 rounded-lg shadow-md"
          >
            <img src={item.image} alt="logo" className="w-12 h-12 mb-2" />
            <p className="text-center font-bold text-gray-500 ">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-md text-gray-400 font-normal mr-16">or</p>
      </div>
      <div className="w-8/12 ml-36 cursor-pointer border-dashed border-2 border-gray-400 p-8 rounded-xl mt-5 flex flex-col items-center justify-center">
        <MdOutlineCloudUpload className="text-6xl text-purple-700 mt-[-20px]" />
        <p className="mb-4 text-center text-gray-500 font-semibold">Select a file and drag and drop here (Podcast media or Transcript Text)</p>
        <p className="mb-4 mt-[-15px] text-center text-xs text-gray-400">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
         
        <label
          htmlFor="file-upload"
          className="cursor-pointer border text-purple-700 border-purple-700 py-2 px-4 rounded-3xl"
        >
          Select File
        </label>
        <input
          type="file"
          id="file-upload"
          onChange={handleFileUpload}
          className="hidden"
        />
        {fileUpload && (
          <div className="mt-4">
            <p>Selected File: {fileUpload.name}</p>
            <p>File Type: {fileUpload.type}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectSection;
