import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Web from "../assets/images/audit.webp";

function Middle() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-yellow-500 to-indigo-900 w-full h-screen flex border bg-slate-400 top-0 flex-col lg:flex-row items-center justify-center lg:justify-between py-12 px-4 lg:px-24">
      <div className="lg:w-1/2 lg:mr-8">
        <h1 className="text-3xl text-cyan-50 lg:text-5xl font-bold text-center lg:text-left mb-4">
          Our Apps will be a <br /> game changer for <br /> your Shopify Store
        </h1>
        <p className="text-center lg:text-left text-cyan-50">
          Merchants are raving about our apps. With 5X ROI in less than a month,
          we are confident our apps will transform your store and skyrocket AOV
          and Retention.
        </p>
        <div className="flex gap-10">
          <button className="mt-4 bg-white hover:bg-blue-600 hover:text-white text-black font-semibold py-3 px-4 rounded-3xl flex items-center">
            Checkout our Apps <FaArrowRightLong className="ml-2" />
          </button>
          <button className="mt-4 bg-yellow-500 hover:bg-blue-600 hover:text-white text-black font-semibold py-3 px-4 rounded-3xl flex items-center">
            Book a Demo <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img src={Web} alt="Website Audit" className="w-full" />
      </div>
    </div>
  );
}

export default Middle;
