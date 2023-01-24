import React from 'react'
import { Link } from "react-router-dom";
import error from "../assets/images/error404.png";
import Button from "../components/button";

const Error404 = () => {
  return (
    <>
    <div className="flex justify-center items-center sm:flex-col md:flex-row">
      <div className="text-center text-10xl font-extrabold max-sm:text-5xl">
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
      <div className="text-center text-10xl font-extrabold max-sm:text-5xl">
        4
      </div>
    </div>
    <div className="flex flex-col items-center justify-center">
      <div className="p-10">
        The page you are trying to search has been moved to another universe.
      </div>
      <div className="">
        <Link to="/"><Button text="Go Home" /></Link>
      </div>
    </div>
  </>
  )
}

export default Error404