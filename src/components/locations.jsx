import React from "react";

const Locations = () => {
  const [locations, setlocations] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
      .then((res) => res.json())
      .then((data) => setlocations(locations.concat(data.results)))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [page]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setPage(page + 1);
  };

  return (
  <div>Locations</div>
  )
};

export default Locations;
