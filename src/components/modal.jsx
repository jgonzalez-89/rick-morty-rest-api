import React from "react";
import Button from "./button";

import { ConnectedRickAndMorty } from './characters.jsx';

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);

  console.log(ConnectedRickAndMorty);

  return (
    <>
      <Button onClick={() => setShowModal(true)} text="Favorites" />

      {showModal ? (
        <>
          <ConnectedRickAndMorty />
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <Button onClick={() => setShowModal(false)} text="X" />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {favorites.map((character) => (
                    <div key={character.id} className="p-4">
                      <div className="bg-white rounded-lg p-6">
                        {/* <img
                    src={character.image}
                    alt={character.name}
                    className="w-full mb-4 rounded-lg transform transition-all duration-200 hover:scale-110"
                  /> */}
                        <h1 className="text-xl text-gray-800 font-medium mb-2">
                          {character.name}
                        </h1>
                        <p className="text-gray-600">
                          {character.gender} - {character.species}
                        </p>
                        {/* <p
                    className={
                      character.status === "Alive"
                        ? "text-green-700 ml-2"
                        : character.status === "Dead"
                        ? "text-red-700 ml-2"
                        : "text-blue-700 ml-2"
                    }
                  >
                    {character.status}
                  </p> */}
                        {/* <div
                    className="relative inline-block text-lg group cursor-pointer"
                    onClick={() => handleAddToFavorites(character)}
                  >
                  </div> */}
                      </div>
                    </div>
                  ))}
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p> */}
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <Button onClick={() => setShowModal(false)} text="Close" />
                  <Button onClick={() => setShowModal(false)} text="Save" />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
