import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-2 flex justify-between items-center">
      <a href="#" className="text-white">Home</a>
      <form className="flex">
        <input type="text" placeholder="Search" className="bg-gray-700 p-2 rounded-lg text-white"/>
        <button className="bg-indigo-500 p-2 rounded-lg text-white">Search</button>
      </form>
      <a href="#" className="text-white">Favorites</a>
    </nav>
  );
}

export default Navbar;