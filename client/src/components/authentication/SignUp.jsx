import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../../utils/Metadata";
import Navbar from "../Navbar";
import { API } from "../../utils/Api.js";

const SignUp = () => {
  const [signingUp, setSigningUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      setFormData({
        ...formData,
        avatar: e.target.files[0],
      });
    } else {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSigningUp(true);
  
    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.username);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("avatar", formData.avatar);
  
    try {
      console.log("Form Data to Send: ", formDataToSend); // Check the form data before sending
  
      const response = await API.signUpUser(formDataToSend);
      console.log("SignUp success", response); // Check the API response
  
      navigate("/signin");
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };
  

  return (
    <>
      <MetaData title={"Skai Lama | Register"} />
      <Navbar />
      <div className="bg-gradient-to-r from-purple-900 via-yellow-500 to-indigo-900 w-full h-screen min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Sign Up for an Account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-300"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-300"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-300"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="avatar" className="sr-only">
                  Avatar
                </label>
                <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  onChange={handleChange}
                  className="appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-300"
                  placeholder="Avatar"
                />
              </div>
            </div>

            <div>
              {signingUp ? (
                <button
                  className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded cursor-not-allowed opacity-50"
                  disabled
                >
                  Signing...
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>
              )}
              <div className="text-center mt-4">
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="text-indigo-600 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
