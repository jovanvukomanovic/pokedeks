import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Pagination({
  goToPreviousPage,
  goToNextPage,

  minPageNumberLimit,
  maxPageNumberLimit,

  limitPerPAge,
  setLimitPerPage,
  fetchPokemons,
  setSelectedIndex,
  selectedIndex,
}) {
  // const [selectedIndex, setSelectedIndex] = useState(0);

  let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limitPerPAge}&offset=0`;

  const {
    loading,
    nextPage,
    prevPage,
    data: pokemonList,
    number: pokemonNumber,
    // fetchPokemons,
  } = useFetch(url, limitPerPAge);

  const numberToShow = debounce((num, param1 = 51) => {
    setLimitPerPage(num);
  }, 500);

  function debounce(callback, delay = 1000) {
    let timeout;
    return (args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback(args);
        console.log(args);
      }, delay);
    };
  }

  // console.log(pokemonNumber);
  let pages = Math.ceil(pokemonNumber / Number(limitPerPAge));

  let arrayOfDigits = [];
  for (let i = 1; i <= pages; i++) {
    arrayOfDigits.push(i);
  }

  const fetchItem = (pageNumber, index) => {
    let ofsetUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${limitPerPAge}&offset=${
      pageNumber * 10
    }`;
    fetchPokemons(ofsetUrl);
    console.log(pageNumber);
    console.log(index);
    setSelectedIndex(index);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="show per page"
          onChange={(e) => numberToShow(e.target.value)}
        />
      </form>

      {goToPreviousPage && <button onClick={goToPreviousPage}>Previous</button>}

      {arrayOfDigits.map((pageNumber, index) => {
        if (
          pageNumber < maxPageNumberLimit + 1 &&
          pageNumber > minPageNumberLimit
        ) {
          return (
            <button
              key={index}
              onClick={(e) => fetchItem(pageNumber, index)}
              className={selectedIndex === index ? "active" : ""}
            >
              {pageNumber}
            </button>
          );
        } else {
          return null;
        }
      })}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </div>
  );
}
