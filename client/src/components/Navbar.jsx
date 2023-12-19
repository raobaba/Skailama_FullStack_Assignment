import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Top from "../assets/images/Vector1.png";
import Bottom from "../assets/images/Vector.png";
import "../styles/Navbar.css";
import MetaData from "../utils/Metadata.jsx";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setShowDrawer(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <MetaData title="Skai Lama - Shopify Apps to Supercharge DTC and eCommerce..." />
      <div className="MainNavbar bg-gradient-to-r from-purple-200 via-yellow-100 to-indigo-300 md:w-full lg:w-full w-full justify-between h-16 mx-auto top-0 shadow-md flex font-sans rounded-bl-5 rounded-br-5 backdrop-blur z-10 m-auto sticky">
        <Link className="flex justify-around" to="/">
          <div
            className={`Logo h-8 mt-2 ml-12 transition-opacity duration-300 ease-in-out ${
              showDrawer ? "hide-logo opacity-0 pointer-events-none" : ""
            }`}
          >
            <img
              className="pt-3 ml-1"
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
          <div className="w-134.37 h-30 top-29 left-89.63 ml-2">
            <h1 className="text-purple-800 font-sans font-bold mt-4 text-2xl leading-12 tracking-normal text-left">
              LAMA.
            </h1>
          </div>
        </Link>
        <div className="desk-navbar lg:w-70 w-3/5 justify-between flex">
          <div className="Navbar-links w-2/5 flex items-center justify-between font-semibold text-rgb-70-79-94">
            <Link
              className="no-underline font-plusjakartasans text-gray-700 text-base"
              to="/"
            >
              Home
            </Link>
            <Link
              className="no-underline font-plusjakartasans text-gray-700 text-base"
              to="/team"
            >
              Apps
            </Link>
            <Link
              className="no-underline font-plusjakartasans text-gray-700 text-base"
              to="/contact"
            >
              Services
            </Link>
            <Link
              className="no-underline font-plusjakartasans text-gray-700 text-base"
              to="/careers"
            >
              Blog
            </Link>
            <Link
              className="no-underline font-plusjakartasans text-gray-700 text-base"
              to="/careers"
            >
              Partners
            </Link>
          </div>
          <Link
            to="/signin"
            className="SignInButton mt-4 pt-1 w-20 h-9 rounded-md text-green-800 font-bold cursor-pointer text-center border border-green-700 mr-14 no-underline hover:bg-green-700 hover:text-white"
          >
            Sign In
          </Link>
        </div>

        <div
          className="menu-icon lg:hidden md:hidden cursor-pointer mr-14 mt-6"
          onClick={toggleDrawer}
        >
          {showDrawer ? " " : <HiOutlineMenuAlt3 size={35} />}
        </div>
        <div
          className={`drawer w-full h-0 bg-gray-100 border border-gray-100 absolute shadow-md top-0 transition-top transition-height overflow-hidden m-0 p-0 ${
            showDrawer ? "show" : ""
          }`}
        >
          <div className="drawered xs:grid xs:ml-44 sm:grid sm:ml-44">
            <HiOutlineX size={35} onClick={toggleDrawer} />
            <div className={`Logo ${showDrawer ? "logo ml-[-3px]" : ""}`}>
              <img src={Top} alt="logo" width={20} height={20} />
              <img src={Bottom} alt="logo" width={20} height={20} />
            </div>
            <Link className="sm:text-20 sm:font-semibold sm:ml-[-7px]" to="/">
              Home
            </Link>
            <Link
              className="sm:text-20 sm:font-semibold sm:ml-[-6px]"
              to="/team"
            >
              Team
            </Link>
            <Link
              className="sm:text-20 sm:font-semibold sm:ml-[-14px]"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="sm:text-20 sm:font-semibold sm:ml-[-14px]"
              to="/careers"
            >
              Careers
            </Link>
            <Link to="/SignIn" className="SignInButton sm:ml-[-20px]">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
