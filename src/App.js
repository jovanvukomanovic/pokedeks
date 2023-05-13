import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

import PokemonList from "./Pokemons/PokemonList";
import EachPokemon from "./Pokemons/EachPokemon";

import BerriesList from "./Berries/BerriesList";
import Berries from "./Berries/Berries";
import Berrie from "./Berries/Berrie";

import ItemsList from "./Items/ItemsList";
import Item from "./Items/Items";
import Items from "./Items/ItemsList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/form" element={<Form />} />
          {/* pokemons */}
          <Route path="/" element={<PokemonList />} />
          <Route path="/eachpokemon/:id" element={<EachPokemon />} />

          {/* berries */}
          <Route path="/berrieslist" element={<BerriesList />} />
          {/* <Route path="/berries" element={<Berries />} /> */}
          <Route path="/eachberry/:id" element={<Berrie />} />

          {/* items  */}
          <Route path="/itemsList" element={<ItemsList />} />
          {/* <Route path="/items" element={<Items />} /> */}
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
