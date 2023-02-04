import React,{useEffect, useState} from 'react'
import{Link} from 'react-router-dom'
import EachPokemon from './EachPokemon'
import Pagination from './Pagination'

export default function PokemonList({pokemonList, goToNextPage, goToPreviousPage}) {
    
   


  return (
    <div>
      <header>
        <h1>POKEMON LIST</h1>
      </header>
        <ul>
      {pokemonList.map((p)=>(
        <li key={p.name} >
       <Link to={`/eachpokemon/${p.name}`}>
        {p.name}
       </Link>
        </li>
        
       
      ))}
      </ul>
        <Pagination  goToNextPage={goToNextPage ? goToNextPage : null} goToPreviousPage={goToPreviousPage ? goToPreviousPage : null}/>
    </div>
  )
}
