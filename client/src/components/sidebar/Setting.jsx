import React, { useState, useRef, useEffect } from "react";
import { API } from "../../utils/Api.js";

function Setting() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userId = "6584879ded3b9c4185e146be";
        const userData = await API.getUserById(userId);
        const details = userData.user;
        setUserDetails({
          username: details.username,
          email: details.email,
          avatar: details.avatar.url,
        });
      } catch (error) {
        console.error("Error fetching user details:", error.message);
      }
    };

    fetchUserDetails();
  }, []);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserDetails({
        ...userDetails,
        avatar: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("username", userDetails.username);
    formDataToSend.append("avatar", selectedFile); 
    const userId = "6584879ded3b9c4185e146be";
    try {
      const response = await API.updateUserDetails(userId, formDataToSend); 
      console.log("Update successful:", response);
    } catch (error) {
      console.error("Update failed:", error.message);
    }
  };
  

  return (
    <div>
      <div className="ml-14 flex items-center">
        <div
          className="w-20 h-20 rounded-full border bg-gray-300 mr-4 cursor-pointer"
          onClick={handleFileClick}
        >
          <img
            className="w-20 h-20 rounded-full"
            src={
              selectedFile
                ? URL.createObjectURL(selectedFile)
                : userDetails.avatar
            }
            alt=""
          />
        </div>
        <div className="flex justify-center gap-5">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <input
            type="text"
            className="border border-gray-400 rounded-md px-2 py-1"
            placeholder="username"
            value={userDetails.username}
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
          />
          <input
            type="text"
            className="border border-gray-400 rounded-md px-2 py-1"
            placeholder="email"
            value={userDetails.email}
            readOnly
          />
          <button
            type="submit"
            className="border border-purple-900 text-purple-700 font-semibold rounded-md px-2 py-1"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-purple-700 mt-8 ml-14">
          Subscriptions
        </h1>
        <div className="w-10/12 h-12 mt-8 ml-14 flex justify-between rounded-lg bg-gradient-to-r from-purple-600 to-purple-900">
          <div className="flex justify-center items-center ml-5">
            <p className="text-stone-100">
              You are currently on the{" "}
              <span className="font-semibold text-xl underline cursor-pointer">
                Ques AI Basic Plan
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center mr-5">
            <button className="w-20 h-8 bg-stone-100 rounded-md font-semibold text-xs">
              Upgrade
            </button>
          </div>
        </div>
        <p className="font-bold text-red-700 ml-14 mt-8 underline cursor-pointer">
          Cancel Subscription
        </p>
      </div>
    </div>
  );
}

export default Setting;
