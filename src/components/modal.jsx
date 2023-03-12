import React, { useState, useEffect } from 'react';
import { HttpHandler } from '../http/handler';
import Button from './button';

const handler = new HttpHandler();

function Modal({ favorites, setFavorites }) {
  const [showModal, setShowModal] = React.useState(false);

  const handleRemoveToFavorites = async (character) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== character.id);
    setFavorites(updatedFavorites);
  
    try {
      await handler.deleteCharacterById(character.id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveCharacter = async (id) => {
    try {
      await handler.deleteCharacterById(id);
      setCharacters(characters.filter((character) => character.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  let obj = favorites;
  let lenght = Object.keys(obj).length;

  return (
    <>
      <Button onClick={() => setShowModal(true)} text={'Favorites ' + lenght} />

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-gray-800 p-6">Favorites Characters</h3>
                  <Button type="button" onClick={() => setShowModal(false)} text="X" />
                </div>
                {/*body*/}
                <div className="relative flex-auto overflow-y-auto w-96 h-96">
                  {favorites.map((character) => (
                    <div key={character.id} className="p-6 flex">
                      <img src={character.image} alt={character.name} className="w-40 h-40 rounded-md" />
                      <div className="ml-6">
                        <p className=" text-gray-800">{character.name}</p>
                        <Button type="button" onClick={() => handleRemoveToFavorites(character)} text="X" />
                      </div>
                    </div>
                  ))}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"></div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
