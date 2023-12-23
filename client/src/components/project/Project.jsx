import React, { useState,useEffect } from "react";
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
import { API } from "../../utils/Api.js";
import Cookies from 'js-cookie'

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [show, setShow] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const userId = Cookies.get('userId');
        const response = await API.getAllUploads(userId);
        console.log("getAllUploads success")
        setProjectData(response.uploads);
      } catch (error) {
        console.error("Error fetching project data:", error.message);
      }
    };

    fetchProjectData();
  }, []);

async function fetchAndDisplayData() {
    try {
      const userId = Cookies.get('userId');
      const response = await API.getAllUploads(userId);
      setProjectData(response.uploads);
      setShow(true);
    } catch (error) {
      console.error("Error fetching and displaying project data:", error.message);
    }
  }  


  return (
    <>
      <MetaData title={"Skai Lama | create new project"} />
      <div className="">
        <div className="flex justify-between p-4">
          <Link className="flex justify-around" to="/">
            <div className="Logo h-4 ml-5 transition-opacity duration-300 ease-in-out">
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
              <h1 className="text-purple-800 font-sans font-bold mt-1 text-2xl leading-12 tracking-normal text-left">
                LAMA.
              </h1>
            </div>
          </Link>
          <div className="flex items-center mt-5">
            <IoSettingsOutline className="text-3xl mr-2 cursor-pointer " />
            <IoNotificationsOutline className="text-3xl mr-5 cursor-pointer " />
          </div>
        </div>

        <Link
          to="/"
          className="flex ml-32 items-center shadow-md w-32 justify-center text-sm rounded-xl border border-slate-300 text-gray-600"
        >
          <AiTwotoneHome className="mr-2" /> Back to Home
        </Link>

        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          fetchData={fetchAndDisplayData}
        />
        {!show ? (
          <div className="p-8 rounded-lg w-auto text-center">
            <div className="w-694 h-86 mt-[-30px] left-612">
              <h1 className="text-4xl font-bold text-purple-700">
                Create a New Project
              </h1>
            </div>
            <div className="mt-3 flex justify-center items-center">
              <img src={Cuate} alt="Illustration" width={300} />
            </div>
            <div className="flex justify-center items-center mt-3">
              <div className="w-8/12">
                <p className="text-gray-500">
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
          <NewProject projectData={projectData} openModal={openModal}  />
        )}
      </div>
    </>
  );
}

export default Project;
