import { useEffect, useState } from 'react';
import './App.css';
import PokemonGrid from './components/PokemonGrid';
import Navigation from './components/Navigation';
import { fetchListof_,endpoints } from './Helpers/urlQueries';
import { initLocalHost } from './Helpers/helpers';


function App() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [currPokeList,setCurrPokeList] = useState([])
  const [filtPokeList,setFiltPokeList] = useState([])

  useEffect(()=>{
    initLocalHost()
    fetchListof_(endpoints.pokemon).then(res => setCurrPokeList(res.results))

  },[])

  const filtrarPokeList = (valor) =>{
    valor.length>20?
    setFiltPokeList(valor.splice(0, 20)) : setFiltPokeList(valor) 
}

  return (

    <div className="App">
      <Navigation
        filtrarPokeList={filtrarPokeList}
        pokeList={currPokeList}
        setErrorMsg={setErrorMsg}
      />
      <PokemonGrid
        errorMsg={errorMsg}
        pokeList={filtPokeList.length>0?filtPokeList:currPokeList}
      />

    </div>
    
  );
}

export default App;
