import React, { useState, useEffect } from 'react';
import { HttpHandler } from '../http/handler';
import loader from '../assets/images/loader.gif';
import Button from '../components/button';
import Navbar from '../components/navbar';

const handler = new HttpHandler();

const Blog = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // console.log('Mipo :', characters);

  useEffect(() => {
    setIsLoading(true);
    async function getCharacters() {
      try {
        const result = await handler.getCharacterBlog();
        setCharacters(result);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    getCharacters();
  }, []);

  const handleRemoveCharacter = async (id) => {
    try {
      await handler.deleteCharacterById(id);
      setCharacters(characters.filter((character) => character.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-gray-800 min-h-screen">
        <Navbar favorites={favorites} setFavorites={setFavorites} />
        {isLoading ? (
          <div className="flex justify-center">
            <img src={loader} alt="Loading..." className="mx-auto" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {characters.map((character, index) => (
                <div key={index} className="p-4">
                  <div className="bg-white rounded-lg p-6">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full mb-4 rounded-lg transform transition-all duration-200 hover:scale-110"
                    />
                    <h1 className="text-xl text-gray-800 font-medium mb-2">{character.name}</h1>
                    <p className="text-gray-600">
                      {character.gender} - {character.species}
                    </p>
                    <p
                      className={
                        character.status === 'Alive'
                          ? 'text-green-500 ml-2'
                          : character.status === 'Dead'
                          ? 'text-red-500 ml-2'
                          : 'text-gray-500 ml-2'
                      }
                    >
                      {character.status}
                    </p>
                    <p className="text-gray-600/50">Last know location:</p>
                    <p>{character.location_name}</p>
                    <div className="flex">
                      {/* <Button type="button" onClick={''} text="Edit +" /> */}
                      <Button type="button" onClick={() => handleRemoveCharacter(character.id)} text="Remove" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center cursor-pointer">
              {/* <Button type="button" disabled={isLoading} onClick={handleLoadMore} text={isLoading ? 'Loading...' : 'Load More'} /> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Blog;
