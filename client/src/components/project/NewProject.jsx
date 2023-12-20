// Import necessary libraries and components
import React from "react";
import { GoPlusCircle } from "react-icons/go";

// Define the functional component NewProject
function NewProject({ projectName = [], openModal }) {
  // Log the projectName prop
  console.log(projectName);

  return (
    // Main container for the component
    <div>
      {/* Header section */}
      <div className="flex justify-around items-center mb-4">
        <h1 className="text-5xl font-bold text-purple-700">Projects</h1>
        {/* Button to trigger the openModal function */}
        <button
          onClick={openModal}
          className="text-white bg-slate-950 text-md rounded-lg py-2 px-4 flex items-center"
        >
          {/* Icon with text */}
          <GoPlusCircle
            size={20}
            className="mr-2 bg-stone-50 rounded-2xl text-black"
          />
          Create New Project
        </button>
      </div>

      {/* Container for displaying existing projects */}
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-3 gap-8 w-8/12">
          {/* Mapping through existing projects */}
          {projectName.map((project, index) => (
            <div
              key={index}
              className="flex ml-5 items-center h-24 w-64 rounded-2xl shadow-lg border border-slate-300"
            >
              {/* Displaying project initials or first letters */}
              <div className="mr-8 ml-2 w-20 h-20 border border-slate-500 rounded-xl bg-purple-700">
                {project.includes(" ") ? (
                  // Displaying initials if project name has spaces
                  project.split(" ").map((word, index) => (
                    <span key={index} className=" text-6xl text-white ml-1 ">
                      {word[0].toUpperCase()}
                    </span>
                  ))
                ) : (
                  // Displaying first two letters if no space in project name
                  <span style={{ fontSize: "1.5rem" }}>
                    {project.substring(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              {/* Displaying full project name */}
              <div className=" mr-2 mt-[-15px] ">
                <p className="text-purple-700 text-bold">{project}</p>
                <p className="text-sm">4 episodes</p>
                <p className="text-xs mt-2">created a week age</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Exporting the NewProject component as default
export default NewProject;
