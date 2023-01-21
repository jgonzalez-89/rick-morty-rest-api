import { Link } from "react-router-dom";
import React from "react";
import error from "../images/error404.png"

const NotFound = () => {
  return (
<div className="flex justify-center items-center sm:flex-col md:flex-row">
    <div className="text-center mr-0 text-10xl font-extrabold max-sm:text-5xl">
        4
    </div>
    <div className="text-center">
        <img src={error} alt="imagen" className="h-200 w-200 rounded-full mx-auto" />
    </div>
    <div className="text-center ml-0 text-10xl font-extrabold max-sm:text-5xl">
        4
    </div>
</div>
  );
};

export default NotFound;
