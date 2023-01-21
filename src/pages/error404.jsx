import { Link } from "react-router-dom";
import React from "react";
import error from "../assets/images/error404.png";

const NotFound = () => {
  return (
    <>
      <div className="flex justify-center items-center sm:flex-col md:flex-row">
        <div className="text-center text-10xl font-extrabold max-sm:text-5xl space-x-20">
          4
        </div>
        <div className="text-center  z-10">
          <Link to="/">
            <img
              src={error}
              alt="imagen"
              className="h-200 w-200 rounded-full mx-auto"
            />
          </Link>
        </div>
        <div className="text-center text-10xl font-extrabold max-sm:text-5xl space-x-2">
          4
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link to="/">
          <button className="px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 border-2 border-gray-900 rounded-lg bg-white">
            Go Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
