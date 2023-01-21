import React, { useState, useEffect } from "react";
import loader from "../images/loader.gif";

function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [favorites, setFavorites] = useState([]);

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
    setFavorites([...favorites, character]);
  };

  // console.log(favorites);

  return (
    <>
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
                        ? "text-green-700 ml-2"
                        : character.status === "Dead"
                        ? "text-red-700 ml-2"
                        : "text-blue-700 ml-2"
                    }
                  >
                    {character.status}
                  </p>
                  <p className="text-gray-600/50">Last know location:</p>
                  <p>{character.location.name}</p>
                  <p className="text-gray-600/50">Origin :</p>
                  <p>{character.origin.name}</p>
                  <button
                    className="bg-[#f96e4d] text-white mt-2 cursor-pointer font-black border-[0] p-[11px_22px] rounded-[10px]"
                    onClick={() => handleAddToFavorites(character)}
                  >
                    Add to Favorites
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center bg-gray-800">
            <button
              className="px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 border-2 border-gray-900 rounded-lg bg-white"
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Load More"}
            </button>
          </div>
        </>
      )}
    </>
  );
}
// <div>
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//     {characters.map((character) => (
//       <div key={character.id} className="w-1/3 p-4">
//         <div className="bg-white rounded-lg p-6">
//           <img
//             src={character.image}
//             alt={character.name}
//             className="w-full mb-4 rounded-lg transform transition-all duration-200 hover:scale-110"
//           />
//           <h2 className="text-lg text-gray-800 font-medium mb-2">
//             {character.name}
//           </h2>
//           <p className="text-gray-600">{character.species}</p>
//           <div className="flex">
//             <div
//               className={`rounded-full w-5 h-5 ${
//                 character.status === "Alive"
//                   ? "bg-green-500"
//                   : character.status === "Dead"
//                   ? "bg-red-500"
//                   : "bg-blue-500"
//               }`}
//             ></div>
//             <p
//               className={
//                 character.status === "Alive"
//                   ? "text-green-700 ml-2"
//                   : character.status === "Dead"
//                   ? "text-red-700 ml-2"
//                   : "text-blue-700 ml-2"
//               }
//             >
//               {character.status}
//             </p>
//           </div>
//           <p className="text-blue-600/50">Last know location:</p>
//           <p>{character.location.name}</p>
//           <p className="text-blue-600/50">Origin :</p>
//           <p>{character.origin.name}</p>
//         </div>
//       </div>
//     ))}
//   </div>

// </div>

export default RickAndMorty;
