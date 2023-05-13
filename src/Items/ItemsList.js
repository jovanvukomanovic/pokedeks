import React from "react";
import useFetch from "../hooks/useFetch";
import Items from "./Items";
import { Link } from "react-router-dom";

const ItemsList = () => {
  let itemsUrl = `https://pokeapi.co/api/v2/item/`;

  const {
    loading,
    nextPage,
    prevPage,
    data: itemsList,
    number,
    fetchPokemons,
  } = useFetch(itemsUrl);

  console.log(itemsList);

  if (loading) return "loading...";

  return (
    <div>
      <Items itemsList={itemsList} />
    </div>
  );
};

export default ItemsList;
