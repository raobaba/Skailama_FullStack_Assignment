import React from "react";
import { useNavigate } from "react-router-dom";
import { GoPlusCircle } from "react-icons/go";

function NewProject({ projectName = [], openModal }) {
  const navigate = useNavigate();
  const redirectToUpload = (project) => {
    navigate(`/upload/${project}/project-section`);
  };

  return (
    <div>
      <div className="flex justify-around items-center mb-4">
        <h1 className="text-5xl font-bold text-purple-700">Projects</h1>
        <button
          onClick={openModal}
          className="text-white bg-slate-950 text-md rounded-lg py-2 px-4 flex items-center"
        >
          <GoPlusCircle
            size={20}
            className="mr-2 bg-stone-50 rounded-2xl text-black"
          />
          Create New Project
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-3 gap-8 w-8/12">
          {projectName.map((project, index) => (
            <div
              key={index}
              className="flex ml-5 cursor-pointer items-center h-24 w-64 rounded-2xl shadow-lg border border-slate-300"
              onClick={() => redirectToUpload(project)}
            >
              <div className="mr-8 ml-2 w-20 h-20 border border-slate-500 rounded-xl bg-purple-700">
                {project.includes(" ") ? (
                  project.split(" ").map((word, index) => (
                    <span key={index} className=" text-6xl text-white">
                      {word[0].toUpperCase()}
                    </span>
                  ))
                ) : (
                  <span className="text-6xl text-white ml-1">
                    {project.substring(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div className=" mr-2 mt-[-15px] ">
                <p className="text-purple-700 text-lg font-bold whitespace-nowrap truncate">
                  {project}
                </p>
                <p className="text-sm font-semibold ">4 episodes</p>
                <p className="text-xs mt-2 font-semibold text-gray-500 ">
                  created a week age
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewProject;
