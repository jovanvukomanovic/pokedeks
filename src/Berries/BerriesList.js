import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Berries from "./Berries";
import Pagination from "../components/Pagination";

function BerriesList() {
  const [limitPerPAge, setLimitPerPage] = useState(() => 10);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  let berriesUrl = `https://pokeapi.co/api/v2/berry/?limit=20&offset=20`;

  const {
    loading,
    nextPage,
    prevPage,
    data: berriesList,
    number,
    fetchPokemons,
    responseObj,
  } = useFetch(berriesUrl);

  console.log(berriesList);

  // console.log(responseObj);

  if (loading) return "loading...";

  function goToNextPage() {
    fetchPokemons(nextPage);
    setmaxPageNumberLimit(maxPageNumberLimit + 1);
    setminPageNumberLimit(minPageNumberLimit + 1);
  }

  function goToPreviousPage() {
    fetchPokemons(prevPage);
    setmaxPageNumberLimit(maxPageNumberLimit - 1);
    setminPageNumberLimit(minPageNumberLimit - 1);
  }

  return (
    <div>
      <p>Berries</p>
      <Berries berriesList={berriesList} />
      <Pagination
        goToNextPage={goToNextPage ? goToNextPage : null}
        goToPreviousPage={goToPreviousPage ? goToPreviousPage : null}
        minPageNumberLimit={minPageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        limitPerPAge={limitPerPAge}
        setLimitPerPage={setLimitPerPage}
        // number={number}
        fetchPokemons={fetchPokemons}
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
    </div>
  );
}

export default BerriesList;
