import React from "react";
import { Link } from "react-router-dom";

function pokemons({ pokemonList }) {
  // console.log(pokemonList);
  return (
    <div>
      {pokemonList.map((p, index) => (
        <li key={p.name} id={index}>
          <Link to={`/eachpokemon/${p.name}`}>{p.name}</Link>
        </li>
      ))}
    </div>
  );
}

export default pokemons;
