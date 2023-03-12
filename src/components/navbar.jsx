import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Button from "./button";
import Modal from "./modal";

const Navbar = ({ favorites, setFavorites, showModal }) => {

  return (
    <div className="flex flex-col md:flex-row md:justify-between bg-gray-800">
      <div>
        {" "}
        {
          <div className="absolute w-[90vw] h-[30vh] animate-[spin_240s] bg-[length:240px] bg-[url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0MCAyNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxyZWN0IHg9IjEwNiIgeT0iOTAiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz48cmVjdCB4PSI3NCIgeT0iNjMiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIyMyIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSI1MCIgeT0iMTEwIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iNjMiIHk9IjEyOCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjQ1IiB5PSIxNDkiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSI5MiIgeT0iMTUxIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iNTgiIHk9IjgiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxNDciIHk9IjMzIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+PHJlY3QgeD0iOTEiIHk9IjQzIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iMTY5IiB5PSIyOSIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjE4MiIgeT0iMTkiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxNjEiIHk9IjU5IiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iMTM4IiB5PSI5NSIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjE5OSIgeT0iNzEiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIzIiBoZWlnaHQ9IjMiLz48cmVjdCB4PSIyMTMiIHk9IjE1MyIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPjxyZWN0IHg9IjEyOCIgeT0iMTYzIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iMjA1IiB5PSIxNzQiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxNTIiIHk9IjIwMCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjUyIiB5PSIyMTEiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz48cmVjdCB5PSIxOTEiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxMTAiIHk9IjE4NCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjwvc3ZnPg==)]"></div>
        }
      </div>
      <div className="text-white md:w-1/3">
        <Link to="/" className="relative inline-block text-lg group">
          <Button type="button" text="Home" />
        </Link>
        <Link to="/characters" className="relative inline-block text-lg group">
          <Button type="button" text="Characters" />
        </Link>
        <Link to="/blog" className="relative inline-block text-lg group">
          <Button type="button" text="Blog" />
        </Link>
      </div>
      <div className="flex items-center justify-center md:w-1/3">
        <Link to="/">
          <img src={Logo} alt="My Image" className="h-12 w-40" />
        </Link>
      </div>
      <div className="text-white text-right md:w-1/3">
        <div>
        {showModal && <Modal favorites={favorites} setFavorites={setFavorites} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
