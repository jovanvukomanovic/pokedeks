import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EachPokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const [pokemonId, setPokemonId] = useState();
  const [pokemonPicture, setPokemonPicture] = useState();

  const fetchData = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      console.log(res.data);
      setPokemon(res.data.name);
      setPokemonPicture(res.data.sprites.front_default);
      setPokemonId(res.data.id);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {pokemon}

      {<img src={pokemonPicture} />}
    </div>
  );
}
