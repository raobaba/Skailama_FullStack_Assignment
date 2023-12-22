import React, { useState ,useEffect} from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import UploadModal from "../upload/UploadModal";
import Transcript from "../transcript/Transcript";
import Cookies from "js-cookie";
import { API } from "../../utils/Api.js";

function ProjectSection() {
  const [fileUpload, setFileUpload] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTrans, setShowTrans] = useState(false);
  const [transcriptList, setTranscriptList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [uploadFile,setUploadFileUpload] = useState([])

  const openModal = (item) => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };
  console.log(selectedItem);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addTranscript = (newTranscript) => {
    setTranscriptList([
      ...transcriptList,
      { name: newTranscript.name, description: newTranscript.description },
    ]);
    setShowTrans(true);
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFileUpload(uploadedFile);
  };

 console.log("selected",selectedItem)

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const uploadId = Cookies.get('uploadId');
        console.log(uploadId)
        const response = await API.getAllFilesByUploadId(uploadId);
        setUploadFileUpload(response.files);
      } catch (error) {
        console.error("Error fetching project data:", error.message);
      }
    };

    fetchProjectData();
  }, []);
  console.log(uploadFile)

  return (
    <div className="container mx-auto py-1">
      <h1 className="text-3xl font-bold ml-16 mb-4 text-purple-700">Upload</h1>
      <div className="grid ml-16 grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 w-10/12">
        {uploadFile.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white w-60 cursor-pointer h-20 border border-gray-300 p-4 rounded-lg shadow-md"
            onClick={() => openModal(item)}
          >
            <img src={item.url} alt="logo" className="w-12 h-12 mb-2" />
            <p className="text-center font-bold text-gray-500 ">{item.text}</p>
          </div>
        ))}
      </div>
      <UploadModal
        isOpen={isModalOpen}
        onClose={closeModal}
        addTranscript={addTranscript}
        selectedItem={selectedItem}
      />

      {!showTrans ? (
        <>
          <div className="mt-8 text-center">
            <p className="text-md text-gray-400 font-normal mr-16">or</p>
          </div>
          <div className="w-8/12 ml-36 cursor-pointer border-dashed border-2 border-gray-400 p-8 rounded-xl mt-5 flex flex-col items-center justify-center">
            <MdOutlineCloudUpload className="text-6xl text-purple-700 mt-[-20px]" />
            <p className="mb-4 text-center text-gray-500 font-semibold">
              Select a file or drag and drop here (Podcast Media or
              Transcription Text)
            </p>
            <p className="mb-4 mt-[-15px] text-center text-xs text-gray-400">
              MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
            </p>

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
        </>
      ) : (
        <Transcript
          name={transcriptList.map((item) => item.name)}
          descriptions={transcriptList.map((item) => item.description)}
          setTranscriptList={setTranscriptList}
          transcriptList={transcriptList} 
        />
      )}
    </div>
  );
}

export default ProjectSection;
