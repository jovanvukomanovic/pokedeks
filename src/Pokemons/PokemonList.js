import React, { useState } from "react";
// import BerriesList from "../Berries/BerriesList";
// import Items from "../Items/Items";
import Pagination from "../components/Pagination";
import Pokemons from "./Pokemons";
import useFetch from "../hooks/useFetch";

export default function PokemonList() {
  // const [toggleTab, setToggleTab] = useState(1);
  const [limitPerPAge, setLimitPerPage] = useState(() => 10);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limitPerPAge}&offset=0`;

  const {
    loading,
    nextPage,
    prevPage,
    data: pokemonList,
    number,
    fetchPokemons,
  } = useFetch(url, limitPerPAge);

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

  console.log(pokemonList);
  return (
    <div>
      <header>
        <h1>POKEMON LIST</h1>
      </header>
      {/* <button onClick={() => setToggleTab(1)}>Pokemons</button>
      <button onClick={() => setToggleTab(2)}>Berries</button>
      <button onClick={() => setToggleTab(3)}>Items</button> */}
      {/* <ul>
        {toggleTab === 1 && <Pokemons pokemonList={pokemonList} />}
        {toggleTab === 2 && <BerriesList />}
        {toggleTab === 3 && <Items />}
      </ul> */}
      <Pokemons pokemonList={pokemonList} />
      {/* <BerriesList />
       <Items /> */}
      <Pagination
        goToNextPage={goToNextPage ? goToNextPage : null}
        goToPreviousPage={goToPreviousPage ? goToPreviousPage : null}
        minPageNumberLimit={minPageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        limitPerPAge={limitPerPAge}
        setLimitPerPage={setLimitPerPage}
        // pokemonNumber={pokemonNumber}
        // number={number}
        fetchPokemons={fetchPokemons}
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
    </div>
  );
}
