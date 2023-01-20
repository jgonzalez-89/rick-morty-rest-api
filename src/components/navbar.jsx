import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-2 flex justify-between items-center">
      <button className="text-white"><Link to="/">Home</Link></button>
      <form className="flex">
        <input type="text" placeholder="Search" className="bg-gray-700 p-2 rounded-lg text-white"/>
        <button className="bg-indigo-500 p-2 rounded-lg text-white">Search</button>
      </form>
      <a href="#" className="text-white">Favorites</a>
    </nav>
  );
}

export default Navbar;