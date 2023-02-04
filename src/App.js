import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PokemonList from './PokemonList';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import EachPokemon from './EachPokemon';
import Form from './Form'


function App() {
  const [pokemonList, setPokemonList] = useState([])
  const[currentPageUrl,setCurrentPageUrl]= useState('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
  const[nextPage, setNextPage] = useState()
  const[prevPage, setPrevPage] = useState()
  const[loading,setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    let cancel 
    axios.get(currentPageUrl, {cancelToken : new axios.CancelToken((c)=>cancel = c)}).then((res)=>{
      setLoading(false)
      setNextPage(res.data.next)
      setPrevPage(res.data.previous )
      setPokemonList(()=> res.data.results)

    })

    return ()=>{
      cancel()
    }

  },[currentPageUrl])

if(loading) return 'loading...'

  // console.log(pokemonList) 

 function goToNextPage (){
  setCurrentPageUrl(nextPage)
 }

 function goToPreviousPage (){
  setCurrentPageUrl(prevPage)
 }

  return (
    <div className="App">
    <Router>
       <Routes>
        <Route path='/form' element={<Form/>}/>
           <Route path='/' element={ <PokemonList pokemonList={pokemonList } goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}/> } />
         <Route path='/eachpokemon/:id' element={<EachPokemon/>}/>
      </Routes>
    </Router>
    </div>
  

  );
}

export default App;
