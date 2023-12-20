// Import necessary libraries and components
import React, { useState } from "react";
import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import MetaData from "../../utils/Metadata";
import { Link } from "react-router-dom";
import Top from "../../assets/images/Vector1.png";
import Cuate from "../../assets/images/cuate.png";
import Bottom from "../../assets/images/Vector.png";
import { AiTwotoneHome } from "react-icons/ai";
import { GoPlusCircle } from "react-icons/go";
import ProjectModal from "./ProjectModal";
import NewProject from "./NewProject";

// Define the Project functional component
function Project() {
  // State variables using useState hook
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState([]);
  const [show, setShow] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to add a new project to the list
  const addProject = (name) => {
    setProjectName([...projectName, name]);
    setShow(true);
  };

  return (
    <>
      {/* Metadata component */}
      <MetaData title={"Skai Lama | create new project"} />
      <div className="">
        {/* Header section */}
        <div className="flex justify-between p-4">
          {/* Logo */}
          <Link className="flex justify-around" to="/">
            <div className="Logo h-4 ml-5 transition-opacity duration-300 ease-in-out">
              {/* Images for logo */}
              <img
                className="pt-1 ml-1"
                src={Top}
                alt="logo"
                width={18}
                height={13}
              />
              <img
                className="mt-[-5px]"
                src={Bottom}
                alt="logo"
                width={31}
                height={25}
              />
            </div>
            <div className="ml-2">
              {/* Title */}
              <h1 className="text-purple-800 font-sans font-bold mt-1 text-2xl leading-12 tracking-normal text-left">
                LAMA.
              </h1>
            </div>
          </Link>
          {/* Icons for settings and notifications */}
          <div className="flex items-center mt-5">
            <IoSettingsOutline className="text-3xl mr-2 cursor-pointer " />
            <IoNotificationsOutline className="text-3xl mr-5 cursor-pointer " />
          </div>
        </div>

        {/* Navigation link */}
        <Link
          to="/"
          className="flex ml-32 items-center shadow-md w-32 justify-center text-sm rounded-xl border border-slate-300 text-gray-600"
        >
          <AiTwotoneHome className="mr-2" /> Back to Home
        </Link>

        {/* Conditional rendering based on 'show' state */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          addProject={addProject}
        />
        {!show ? (
          // Display when 'show' is false
          <div className="p-8 rounded-lg w-auto text-center">
            {/* Heading for creating a new project */}
            <div className="w-694 h-86 mt-[-30px] left-612">
              <h1 className="text-4xl font-bold text-purple-700">
                Create a New Project
              </h1>
            </div>
            {/* Illustration */}
            <div className="mt-3 flex justify-center items-center">
              <img src={Cuate} alt="Illustration" width={300} />
            </div>
            {/* Description */}
            <div className="flex justify-center items-center mt-3">
              <div className="w-8/12">
                <p className="text-gray-500">
                  {/* Placeholder text */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            {/* Button to open modal */}
            <div onClick={openModal} className="flex justify-center items-center mt-8">
              <button className="text-white bg-slate-950 text-2xl rounded-lg py-3 px-4 flex items-center justify-around ">
                <GoPlusCircle
                  size={30}
                  className="mr-2 bg-stone-50 rounded-2xl text-black "
                />{" "}
                Create New Project
              </button>
            </div>
          </div>
        ) : (
          // Display when 'show' is true
          <NewProject projectName={projectName} openModal={openModal} />
        )}
      </div>
    </>
  );
}

// Export the Project component as default
export default Project;
