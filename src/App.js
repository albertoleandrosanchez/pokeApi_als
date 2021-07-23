import { useEffect, useState } from 'react';
import PokemonGrid from './components/PokemonGrid';
import Navigation from './components/Navigation';
import { fetchListof_,endpoints } from './Helpers/urlQueries';
import { initLocalHost,colors } from './Helpers/helpers';
import styled from 'styled-components';

const Application = styled.div`
    margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Cinzel", serif;
  background-color: ${colors.light.primary};
`

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

    <Application>
      <Navigation
        filtrarPokeList={filtrarPokeList}
        pokeList={currPokeList}
        setErrorMsg={setErrorMsg}
      />
      <PokemonGrid
        errorMsg={errorMsg}
        pokeList={filtPokeList.length>0?filtPokeList:currPokeList}
      />

    </Application>
    
  );
}

export default App;
