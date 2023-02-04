import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function PokemonPicture({PokemonId}) {
    const[picture,setPicture]= useState();




    const fetchPicture = ()=>{ 
        axios.get('https://github.com/PokeAPI/sprites/tree/master/sprites'+ PokemonId).then((res)=>{     
        console.log(res);  
        })
      } 
      useEffect(() => {
       fetchPicture();  
      }, [])
  return (
    <div>


    </div>
  )
}
