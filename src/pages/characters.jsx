import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import loader from "../assets/images/loader.gif";
import Button from "../components/button";
import Navbar from "../components/navbar";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((data) => setCharacters(characters.concat(data.results)))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleAddToFavorites = (character) => {
    setFavorites((prevFavorites) => [...prevFavorites, character]);
  };

  const handleAddToInfo = (character) => {
    setInfo(character);
  };

  return (
    <>
      <Navbar favorites={favorites} setFavorites={setFavorites} />
      {isLoading ? (
        <div className="bg-gray-800 min-h-screen">
          <img src={loader} alt="Loading..." className="mx-auto" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-gray-800">
            {characters.map((character) => (
              <div key={character.id} className="p-4">
                <div className="bg-white rounded-lg p-6">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full mb-4 rounded-lg transform transition-all duration-200 hover:scale-110"
                  />
                  <h1 className="text-xl text-gray-800 font-medium mb-2">
                    {character.name}
                  </h1>
                  <p className="text-gray-600">
                    {character.gender} - {character.species}
                  </p>
                  <p
                    className={
                      character.status === "Alive"
                        ? "text-green-500 ml-2"
                        : character.status === "Dead"
                        ? "text-red-500 ml-2"
                        : "text-gray-500 ml-2"
                    }
                  >
                    {character.status}
                  </p>
                  <p className="text-gray-600/50">Last know location:</p>
                  <p>{character.location.name}</p>
                  <div className="flex">
                    <Button
                      type="button"
                      onClick={() => handleAddToFavorites(character)}
                      text="Favorites"
                    />
                    <Link to="/info">
                      <Button
                        type="button"
                        onClick={() => handleAddToInfo(character)}
                        text="+ info"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center bg-gray-800 cursor-pointer">
            <Button
              type="button"
              disabled={isLoading}
              onClick={handleLoadMore}
              text={isLoading ? "Loading..." : "Load More"}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Characters;
