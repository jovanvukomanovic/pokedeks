import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import PokemonPicture from './PokemonPicture';

export default function EachPokemon() {
    const{id}=useParams();
    const[pokemon,setPokemon]= useState();
    const[pokemonId,setPokemonId]= useState();
   

    const fetchData = ()=>{ 
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res)=>{     
        setPokemon(res.data.name)  
        // console.log(res.data.id);  
        setPokemonId(res.data.id)
        
        })
      } 
    
      useEffect(() => {
       fetchData();  
      }, [])

      console.log(pokemonId)

    //   const fetchPicture = (pokemonId)=>{ 
    //     axios.get(`https://github.com/PokeAPI/sprites/tree/master/sprites/${pokemonId}`).then((res)=>{     
    //     console.log(res);  
    //     })
    //   } 
    //   useEffect(() => {
    //    fetchPicture();  
    //   }, [])

    //   console.log(pokemon)
  return (
    <div>{pokemon}
   
    </div>

  )
}
