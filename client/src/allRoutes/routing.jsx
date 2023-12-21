import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../components/authentication/SignIn.jsx";
import SignUp from "../components/authentication/SignUp";
import Home from "../components/Home";
import Project from "../components/project/Project.jsx";
import Upload from "../components/upload/Upload.jsx";
import ProjectSection from "../components/sidebar/ProjectSection.jsx";
import Configuration from '../components/sidebar/Configuration.jsx'
import Deployment from '../components/sidebar/Deployment.jsx';
import Pricing from '../components/sidebar/Pricing.jsx';
import Setting from '../components/sidebar/Setting.jsx';
import UploadSidebar from "../components/upload/UploadSidebar.jsx";
import EditTranscript from "../components/transcript/EditTranscript.jsx";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/project" element={<Project />} />
      <Route path="/upload/:projectName/*" element={<Upload />}>
      <Route index element={<UploadSidebar />} />
        <Route path="project-section" element={<ProjectSection/>} />
        <Route path="configurations" element={<Configuration />} />
        <Route path="deployment" element={<Deployment />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="edit-transcript" element={<EditTranscript/>} />
        <Route path="settings" element={<Setting />} />
      </Route>
      
    </Routes>
  );
}

export default Routing;
