import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../components/authentication/SignIn.jsx";
import SignUp from "../components/authentication/SignUp";
import Home from "../components/Home";
import Project from "../components/project/Project.jsx";
import Upload from "../components/upload/Upload.jsx";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/project" element={<Project />} />
      <Route path="/upload/*" element={<Upload />}>
        
      </Route>
    </Routes>
  );
}

export default Routing;
