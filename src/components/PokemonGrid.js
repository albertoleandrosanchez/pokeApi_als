import React, { useState } from 'react'
import { useEffect } from 'react'
import { Grid } from '../Helpers/Elements'
import { getId } from '../Helpers/helpers'
import { fetchPokemon } from '../Helpers/urlQueries'
import PokemonCard from './PokemonCard'


function PokemonGrid({pokeList}) {
    
    const [pokemons, setPokemons] = useState([])

    const pushPokemons = ()=>{      
        setPokemons([])  
        pokeList.forEach( async element  => {
          
          await fetchPokemon(getId(element.url)).then(
            res => 
            setPokemons(poke =>[...poke,res])
          )
        }); 
    }

    const ordenarPokemons = () =>

    pokemons.sort(function(a, b) {
        return a - b;
      });
    

    useEffect(()=>{
        pushPokemons()
        ordenarPokemons()
        
    },[pokeList])

    return (
        <Grid>
            {pokemons.map((poke,id) => <PokemonCard
                pokemon={poke}
                key={id}
            />)}
        </Grid>
    )
}

export default PokemonGrid
