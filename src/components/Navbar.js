import React from "react";
import { Link } from "react-router-dom";
import BerriesList from "../Berries/BerriesList";
// import Pokemons from "../Pokemons/Pokemons";
import PokemonList from "../Pokemons/PokemonList";
import Items from "../Items/ItemsList";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link to={"/"}>Pokemons</Link>
        </li>
        <li>
          <Link to={"/berrieslist"}>Berries</Link>
        </li>
        <li>
          <Link to={"/itemsList"}>Items</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
