import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="absolute m-auto left-0 right-0 text-center top-[50%] translate-y-[-50%] w-fit z-[4]">
        <div>
          <span className="relative text-white font-black block overflow-hidden text-[20.4em] w-fit h-max first-letter:tracking-[12vmax] before:content-[''] before:absolute before:h-full before:w-full before:bg-no-repeat before:bg-contain before:bg-center before:bg-[url('https://staticdelivery.nexusmods.com/mods/1151/images/528-0-1447526230.png')] animate-rotateIn">
            44
          </span>
        </div>
        <Link to="/">
          <button
            type="button"
            className="bg-[#f96e4d] text-white mt-2 cursor-pointer font-black border-[0] p-[11px_22px] rounded-[10px]"
          >
            GET ME HOME
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
